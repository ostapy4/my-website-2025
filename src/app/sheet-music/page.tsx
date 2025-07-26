import { Container, Motion, Title } from "common";
import Image from "next/image";
import Link from "next/link";
import ExercisesIMG from "resources/exercises.jpg";
import PiecesIMG from "resources/pieces.jpg";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

export const metadata = {
  title: "Sheet Music",
  description:
    "Buy accordion sheet music arranged by Ostap Konashuk. Unique custom arrangements for solo, duet, or ensemble. Available for download after purchase.",
  keywords: [
    "accordion sheet music",
    "custom accordion arrangements",
    "buy accordion music online",
    "accordion transcription service",
    "sheet music for chromatic accordion",
  ],
};

export default function SheetMusicPage() {
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
              className={"mb-8 text-center text-ok_main-700 md:mb-12"}
            >
              Sheet Music – Accordion Music Library
            </Title>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={
              "mx-auto mb-12 max-w-screen-lg space-y-5 text-center md:text-lg"
            }
          >
            <p>
              In this section, I’ve collected sheet music and materials
              specially prepared for accordionists of different levels. I’ve
              divided the library into two convenient subcategories:
            </p>
            <div>
              <h4
                className={
                  "mb-2 font-cormorant text-2xl font-bold text-ok_main-600 lg:text-3xl"
                }
              >
                <span>🎯 </span>
                <span className={"italic"}>Exercises</span>
              </h4>
              <p>
                Here you’ll find scales, technical exercises, music theory
                materials, and button layout charts (layouts) for chromatic
                button accordions with C-griff and B-griff systems. These
                resources are great for improving technique and getting familiar
                with your instrument.
              </p>
            </div>
            <div>
              <h4
                className={
                  "mb-2 font-cormorant text-2xl font-bold text-ok_main-600 lg:text-3xl"
                }
              >
                <span>🎼 </span>
                <span className={"italic"}>Repertoire</span>
              </h4>
              <p>
                This is a collection of musical pieces organised by difficulty
                level — from A1 (beginner) to C2 (advanced performer), similar
                to the structure used in language learning. You’ll find
                simplified versions of popular tunes, original compositions, and
                classical repertoire.
              </p>
            </div>
            <div>
              <div
                className={
                  "mb-2 font-cormorant text-2xl font-bold text-ok_main-600 lg:text-3xl"
                }
              >
                <span className={"text-xl lg:text-2xl"}>✅ </span>
                <span className={"italic"}>
                  You can easily filter materials by:
                </span>
              </div>
              <ul
                className={
                  "mx-auto inline-block list-inside list-disc text-left"
                }
              >
                <li>Difficulty level</li>
                <li>Accordion system (C-griff or B-griff)</li>
                <li>Genre, etc.</li>
              </ul>
            </div>
            <p>
              I regularly update the library with new sheet music — both for
              practice and for performance — so every player can find something
              useful and inspiring.
            </p>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={
              "mx-auto flex max-w-screen-sm flex-col items-center justify-center gap-4 md:flex-row"
            }
          >
            <Link
              href={`${MainUrls.getSheetMusic()}/exercises`}
              className={
                "relative flex aspect-square w-full max-w-96 flex-1 flex-col overflow-hidden rounded-2xl bg-ok_main-50"
              }
            >
              <div className={"relative flex-1"}>
                <Image
                  src={ExercisesIMG}
                  alt={"Image"}
                  fill
                  className={"object-contain"}
                />
              </div>
              <div className={"p-2"}>
                <Button
                  fullWidth
                  colorVariant={"cms"}
                  className={{ button: "rounded-2xl text-xl" }}
                >
                  Exercises
                </Button>
              </div>
            </Link>
            <Link
              href={`${MainUrls.getSheetMusic()}/repertoire`}
              className={
                "relative flex aspect-square w-full max-w-96 flex-1 flex-col overflow-hidden rounded-2xl bg-ok_main-50"
              }
            >
              <div className={"relative flex-1"}>
                <Image
                  src={PiecesIMG}
                  alt={"Image"}
                  fill
                  className={"object-contain"}
                />
              </div>
              <div className={"p-2"}>
                <Button fullWidth className={{ button: "rounded-2xl text-xl" }}>
                  Repertoire
                </Button>
              </div>
            </Link>
          </Motion>
        </div>
      </Container>
    </section>
  );
}
