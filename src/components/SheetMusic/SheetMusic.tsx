import { type SheetMusic as SheetType } from "@prisma/client";
import { Container, MotionDiv, Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";
import { PdfViewer } from "components/SheetMusic/PdfViewer";

import { prismaDB } from "lib/db";

import { MainUrls } from "route-urls";

export async function SheetMusic() {
  const sheets = await prismaDB.sheetMusic.findMany();

  return (
    <section>
      <Container>
        <div className={"mb-16 py-8"}>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title
              size={"6xl"}
              className={"mb-12 text-center text-ok_main-700"}
            >
              Sheet music
            </Title>
          </MotionDiv>
          <MotionDiv
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              staggerChildren: 0.3,
            }}
            viewport={{ once: true }}
            className={
              "grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }
          >
            {sheets?.map((sheet) => (
              <MotionDiv
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                key={sheet.id}
                className={"flex h-full flex-col items-center"}
              >
                <SheetCard data={sheet} />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

type SheetCardProps = {
  data: SheetType;
};

function SheetCard({ data }: SheetCardProps) {
  const { id, title, description, pdfUrl, price } = data;
  return (
    <div className={"mx-auto flex h-full w-full max-w-64 flex-col gap-y-4"}>
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
