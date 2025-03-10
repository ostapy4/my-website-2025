"use client";

import { PdfViewer } from "./PdfViewer";
import { type SheetMusic as SheetType } from "@prisma/client";
import { Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

type SheetCardProps = {
  data: SheetType;
};

export function SheetCard({ data }: SheetCardProps) {
  const { id, title, description, pdfUrl, price } = data;
  return (
    <div className={"mx-auto flex h-full w-full max-w-64 flex-col gap-y-4"}>
      <PdfViewer
        classNames={{
          wrapper:
            "aspect-[3/4] max-w-64 self-center overflow-hidden rounded-lg bg-white",
          doc: "!max-w-64",
          page: "customPage !w-full !max-w-64 !overflow-hidden",
          loader: "py-32",
        }}
        url={pdfUrl}
      />
      <div className={"flex flex-1 flex-col gap-y-3"}>
        <Title size={"2xl"} className={"text-center !leading-none"}>
          {title}
        </Title>
        <p className={"line-clamp-3 flex-1 text-sm"}>{description}</p>
        {price ? (
          <div className={"flex items-center gap-x-3 font-bold"}>
            <span>Price:</span>
            <span>${price}</span>
          </div>
        ) : (
          <div className={"font-medium"}>
            <span className={"font-bold uppercase text-lime-600"}>Free</span> to
            download
          </div>
        )}
      </div>
      <div className={"flex w-full items-center gap-x-2"}>
        <Link href={`${MainUrls.getSheetMusic()}/${id}`}>
          <Button fullWidth>View</Button>
        </Link>
        {!price ? (
          <Link href={pdfUrl} download target={"_blank"} className={"w-full"}>
            <Button fullWidth colorVariant={"cms"}>
              Download
            </Button>
          </Link>
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
