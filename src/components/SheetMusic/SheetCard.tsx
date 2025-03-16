"use client";

import { PdfViewer } from "./PdfViewer";
import { type SheetMusic as SheetType } from "@prisma/client";
import { Title } from "common";
import Image from "next/image";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

type SheetCardProps = {
  data: SheetType;
};

export function SheetCard({ data }: SheetCardProps) {
  const { id, author, title, description, pdfUrl, price, preview } = data;
  return (
    <div className={"mx-auto flex h-full w-full max-w-64 flex-col gap-y-4"}>
      {price ? (
        <Link
          href={`${MainUrls.getSheetMusic()}/${id}`}
          className={
            "relative flex aspect-[3/4] max-w-64 items-center justify-center overflow-hidden rounded-lg bg-white"
          }
        >
          {preview ? (
            <Image
              src={preview}
              alt={"Sheet Music"}
              fill
              className={"object-contain"}
            />
          ) : (
            <div className={"text-center"}>Sheet Music Preview</div>
          )}
        </Link>
      ) : (
        <Link href={`${MainUrls.getSheetMusic()}/${id}`}>
          <PdfViewer
            classNames={{
              wrapper:
                "aspect-[3/4] max-w-64 self-center overflow-hidden rounded-lg bg-white",
              document: "!max-w-64",
              page: "customPage !w-full !max-w-64 !overflow-hidden",
              loader: "py-32",
            }}
            url={pdfUrl}
          />
        </Link>
      )}

      <div className={"flex flex-1 flex-col gap-y-3"}>
        <Title
          size={"2xl"}
          className={"line-clamp-2 w-full text-center !leading-none"}
        >
          {title}
          {author && <span className={""}> – {author}</span>}
        </Title>
        <p className={"line-clamp-3 flex-1 text-sm"}>{description}</p>
        {price ? (
          <div
            className={"flex items-center gap-x-3 font-bold text-ok_main-600"}
          >
            <span>Price:</span>
            <span>${price}</span>
          </div>
        ) : (
          <div className={"font-medium text-ok_main-600"}>
            <span className={"font-bold uppercase text-lime-600"}>Free</span> to
            download
          </div>
        )}
      </div>
      <div className={"flex w-full items-center gap-x-2"}>
        {/* <Link href={`${MainUrls.getSheetMusic()}/${id}`}>
          <Button fullWidth>View</Button>
        </Link> */}
        {!price ? (
          <Button
            fullWidth
            colorVariant={"cms"}
            onClick={async () => {
              const response = await fetch(pdfUrl);
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);

              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "file.pdf");
              document.body.appendChild(link);
              link.click();

              window.URL.revokeObjectURL(url);
              document.body.removeChild(link);
            }}
          >
            Download
          </Button>
        ) : (
          <Link
            href={`${MainUrls.getSheetMusic()}/checkout?id=${id}`}
            className={"w-full"}
          >
            <Button fullWidth colorVariant={"danger"}>
              Buy
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
