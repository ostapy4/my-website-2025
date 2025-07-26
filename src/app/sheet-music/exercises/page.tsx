import { Container, Motion, Title } from "common";
import { Metadata } from "next";

import { Exercises } from "components/SheetMusic";

export const metadata: Metadata = {
  title: "Exercises",
  description:
    "Download and practice accordion exercises by Ostap Konashuk. Perfect for improving technique, finger strength, and control. Ideal for beginners and intermediates.",
  keywords: [
    "accordion exercises",
    "accordion technique practice",
    "sheet music for accordion",
    "accordion warm-ups",
    "practice accordion",
    "beginner accordion exercises",
    "intermediate accordion sheet music",
    "free accordion exercises",
    "technical accordion pieces",
    "accordion fingering practice",
  ],
};

export default function ExercisesPage() {
  return (
    <section>
      <Container>
        <div className={"mb-16 py-8"}>
          <Motion
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
          </Motion>
          <Exercises />
        </div>
      </Container>
    </section>
  );
}
