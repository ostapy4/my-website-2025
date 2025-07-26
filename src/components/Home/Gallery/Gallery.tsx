import { Slider } from "./Slider";
import { Container, Motion, Title } from "common";

import { prismaDB } from "lib/db";

export async function Gallery() {
  const data = await prismaDB.gallery.findFirst({ include: { images: true } });

  if (!data) return null;

  return (
    <section className={"bg-ok_main-100 py-12"}>
      <Container>
        <div>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"mb-6 md:mb-8 lg:mb-10"}
          >
            <Title size={"6xl"}>{data?.title}</Title>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Slider data={data?.images} />
          </Motion>
        </div>
      </Container>
    </section>
  );
}
