"use client";

import { type SheetMusic as SheetType } from "@prisma/client";
import { Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

type SheetRowProps = {
  data: SheetType;
  Idx?: number;
};

export function SheetRow({ data, Idx }: SheetRowProps) {
  const { id, author, title, griffType, price, pdfUrl } = data;
  return (
    <div className={"flex gap-x-2"}>
      <div
        className={
          "flex flex-1 items-center gap-x-4 rounded-lg bg-ok_main-50 py-1.5"
        }
      >
        <span
          className={
            "flex w-14 items-center justify-center font-bold text-ok_main-600"
          }
        >
          {Idx}
        </span>
        <Link
          href={`${MainUrls.getSheetMusic()}/${id}`}
          className={"w-full flex-1 text-ok_main-600 hover:underline"}
        >
          <Title size={"xl"} className={"line-clamp-1"}>
            {title}
          </Title>
        </Link>
        <span className={"line-clamp-1 flex-1"}>{author}</span>
        <span className={"line-clamp-1 max-w-24 flex-1 first-letter:uppercase"}>
          {griffType}
          {griffType && "-system"}
        </span>
        {price ? (
          <div
            className={
              "flex max-w-40 flex-1 items-center gap-x-3 font-bold text-ok_main-600"
            }
          >
            <span>Price:</span>
            <span>${price}</span>
          </div>
        ) : (
          <div className={"max-w-40 flex-1 font-bold uppercase text-lime-600"}>
            Free
          </div>
        )}
      </div>
      <div className={"flex w-full max-w-32 items-center gap-x-2"}>
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
            <Button fullWidth colorVariant={"cms"}>
              Buy
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
