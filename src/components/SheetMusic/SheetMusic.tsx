import { Container, MotionDiv, Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";
import { PdfViewer } from "components/SheetMusic/PdfViewer";

import { prismaDB } from "lib/db";

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

type Sheet = {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  createdAt: Date;
};

type SheetCardProps = {
  data: Sheet;
};

function SheetCard({ data }: SheetCardProps) {
  const { title, description, pdfUrl } = data;
  return (
    <div className={"mx-auto flex h-full w-full max-w-64 flex-col gap-y-4"}>
      <PdfViewer url={pdfUrl} />
      <div className={"flex-1 space-y-2"}>
        <Title size={"2xl"} className={"text-center !leading-none"}>
          {title}
        </Title>
        <p className={"text-sm"}>{description}</p>
      </div>
      <Link href={pdfUrl} download target={"_blank"}>
        <Button fullWidth colorVariant={"danger"}>
          Download
        </Button>
      </Link>
    </div>
  );
}
