"use client";

import { VideoCard } from "./VideoCard";
import { Container, MotionDiv, Title } from "common";

const urls = [
  {
    id: "regfdr4835y2turwgsfdh",
    url: "https://youtu.be/tet2yOt8ewk?si=E_yW4g3bNmNodo8g",
  },
  {
    id: "sdthrgsbfdjvhfkwrgesbd",
    url: "https://youtu.be/Xv1HsejFcV8?si=a6axCqWbmFIojor9",
  },
];

export function VideoGallery() {
  return (
    <section>
      <Container>
        <div className={"py-8"}>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title size={"6xl"} className={"mb-8"}>
              Video
            </Title>
          </MotionDiv>
          <MotionDiv
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              staggerChildren: 0.3,
            }}
            viewport={{ once: true }}
            className={"grid grid-cols-1 gap-4 md:grid-cols-2"}
          >
            {urls.map((item) => (
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
                key={item.id}
                className={"aspect-video overflow-hidden rounded-2xl"}
              >
                <VideoCard url={item.url} />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
