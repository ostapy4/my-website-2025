import { Container, Title } from "common";
import Link from "next/link";

import { Motion } from "common/Motion";

import { MainUrls } from "route-urls";

const text = [
  "Hello! My name is Ostap, and I am an accordion teacher with many years of experience as a performer and educator.",
  "Continuing my career as a musician, I have had the honor of working with the national orchestra and touring many countries around the world.",
  "Today, I combine active performances with teaching, helping my students not only master the technique of playing but also discover the world of music, developing their unique style and confidence on stage. I invite you to individual lessons, where we will work together on your musical goals.",
  "Every student for me is a personality, and my methods and technique depends on students. I try to make my lessons fun and positive. I give a lot of examples and associations.",
  "Book a trial lesson with me, so we can discuss goals and how I can help you to reach them.",
];

export function Intro() {
  return (
    <section>
      <Container>
        <div className={"py-12 text-center"}>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Title size={"6xl"} className={"mb-8 text-ok_main-700"}>
              <span
                className={
                  "bg-gradient-to-br from-ok_orange-300 to-ok_orange-500 bg-clip-text text-transparent"
                }
              >
                Accordion
              </span>{" "}
              Lessons Online
            </Title>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={
              "mx-auto mb-8 max-w-[960px] space-y-3 md:text-lg lg:text-xl"
            }
          >
            {text.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"md:text-lg lg:text-xl"}
          >
            <span className={"font-semibold text-ok_main-700"}>
              To{" "}
              <span
                className={
                  "bg-gradient-to-br from-ok_orange-300 to-ok_orange-500 bg-clip-text text-transparent"
                }
              >
                book
              </span>{" "}
              a lesson
            </span>
            , please write to my{" "}
            <a
              className={"font-semibold text-ok_main-700 hover:underline"}
              href={"mailto:ostap.konashuk@gmail.com"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              email
            </a>{" "}
            or choose the package you like and fill out the{" "}
            <Link
              href={MainUrls.getContacts()}
              className={"font-semibold text-ok_main-700 hover:underline"}
            >
              contact form
            </Link>
            .
          </Motion>
        </div>
      </Container>
    </section>
  );
}
