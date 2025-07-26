import { Packages } from "components/Home";
import { Intro, Policy } from "components/Lessons";

export const metadata = {
  title: "Lessons",
  description:
    "Take accordion lessons online with Ostap Konashuk. Beginner to advanced, tailored programs with personal feedback and technique coaching.",
  keywords: [
    "accordion lessons for beginners",
    "advanced accordion teacher",
    "chromatic button accordion classes",
    "virtual accordion lessons",
    "music theory and accordion",
  ],
};

export default function AccordionLessonsPage() {
  return (
    <>
      <Intro />
      <Packages />
      <Policy />
    </>
  );
}
