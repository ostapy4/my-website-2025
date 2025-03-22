import { Container, MotionDiv, Title } from "common";

import { Exercises } from "components/SheetMusic";

export default function ExercisesPage() {
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
              Exercises
            </Title>
          </MotionDiv>
          <Exercises />
        </div>
      </Container>
    </section>
  );
}
