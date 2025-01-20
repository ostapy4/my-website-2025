import { Container, MotionDiv, Title } from "common";

import { Slider } from "./Slider";

export function Gallery() {
  return (
    <section className={"bg-ok_main-50 py-12"}>
      <Container>
        <div>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"mb-6 md:mb-8 lg:mb-10"}
          >
            <Title size={"6xl"}>Gallery</Title>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={
                "rounded-3xl shadow-[0_0_20px_rgba(110,58,34,.4)] lg:rounded-[42px]"
              }
            >
              <Slider />
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
