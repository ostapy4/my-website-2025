import { Container, MotionDiv, Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

export default function SheetMusicPage() {
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
              className={"mb-8 text-center text-ok_main-700 md:mb-12"}
            >
              Sheet music
            </Title>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p
              className={"mx-auto mb-12 max-w-screen-lg text-center md:text-lg"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consequatur, unde hic minus animi laboriosam provident
              voluptatibus similique et numquam mollitia cumque, omnis obcaecati
              minima possimus accusamus, nobis ex odio. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corrupti consequatur, unde hic
              minus animi laboriosam provident voluptatibus similique et numquam
              mollitia cumque, omnis obcaecati minima possimus accusamus, nobis
              ex odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti consequatur, unde hic minus animi laboriosam provident
              voluptatibus similique et numquam mollitia cumque, omnis obcaecati
              minima possimus accusamus, nobis ex odio.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={
              "mx-auto flex max-w-screen-sm flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row"
            }
          >
            <Link
              href={`${MainUrls.getSheetMusic()}/exercises`}
              className={"w-full flex-1"}
            >
              <Button
                fullWidth
                size={"super-large"}
                colorVariant={"cms"}
                className={{ button: "rounded-2xl text-xl" }}
              >
                Exercises
              </Button>
            </Link>
            <Link
              href={`${MainUrls.getSheetMusic()}/pieces`}
              className={"w-full flex-1"}
            >
              <Button
                fullWidth
                size={"super-large"}
                className={{ button: "rounded-2xl text-xl" }}
              >
                Pieces
              </Button>
            </Link>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
