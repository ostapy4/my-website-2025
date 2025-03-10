import { PdfViewer } from "../PdfViewer";
import { SheetMusic } from "@prisma/client";
import { Container, Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

type SheetDetailsProps = {
  data: SheetMusic;
};

export function SheetDetails({ data }: SheetDetailsProps) {
  const { id, title, description, pdfUrl, price } = data;

  return (
    <section>
      <Container>
        <div
          className={
            "flex flex-col-reverse gap-x-4 gap-y-6 py-8 md:flex-row lg:gap-x-6"
          }
        >
          <PdfViewer
            url={pdfUrl}
            classNames={{
              wrapper:
                "flex-1 overflow-hidden rounded-lg lg:rounded-xl bg-white",
              loader: "py-24 md:py-40",
              doc: "max-h-[86vh] overflow-y-auto overflow-x-hidden max-w-full",
              page: "customPage !w-full !max-w-full",
            }}
          />
          <div className={"flex-1 py-4"}>
            <Title className={"mb-4 md:mb-8"}>{title}</Title>
            <p className={"mb-6 italic md:mb-12"}>{description}</p>
            {price ? (
              <div className={"flex justify-between"}>
                <Link href={`${MainUrls.getSheetMusic()}/checkout?id=${id}`}>
                  <Button colorVariant={"danger"} size={"large"}>
                    Buy
                  </Button>
                </Link>
                <p className={"text-right text-3xl font-bold text-ok_main-600"}>
                  ${price}
                </p>
              </div>
            ) : (
              <div>
                <Link href={pdfUrl} download target={"_blank"}>
                  <Button colorVariant={"cms"}>Download</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
