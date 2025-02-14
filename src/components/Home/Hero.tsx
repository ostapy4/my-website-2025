import { Container, MotionSection, Title } from "common";
import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";

import { HeroEmailForm } from "components/Forms/HeroEmailForm";
import KeyIMG from "components/Home/static/music-key.svg";
import NotesIMG from "components/Home/static/notes.svg";

import { prismaDB } from "lib/db";

const features = ["Accordion lessons", "Sheet music", "Audio transcription"];

export async function Hero() {
  const data = await prismaDB.mainImage.findFirst();
  return (
    <MotionSection
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className={"bg-ok_main-100"}
    >
      <Container>
        <div className={"flex min-h-[calc(100vh-77px)] py-8"}>
          <div
            className={
              "flex w-full rounded-3xl bg-ok_main-100 shadow-[0_0_50px_rgba(110,58,34,.5),inset_0_0_20px_rgba(110,58,34,.5)] lg:rounded-[32px]"
            }
          >
            <div
              className={
                "flex w-full flex-col gap-3 overflow-hidden rounded-3xl p-3 lg:flex-row"
              }
            >
              <div
                className={
                  "relative aspect-[4/3] flex-1 overflow-hidden rounded-3xl"
                }
              >
                {data && (
                  <Image
                    src={data.image}
                    alt={"Ostap Konashuk"}
                    fill
                    className={"object-cover object-top saturate-50"}
                  />
                )}
              </div>
              <div
                className={
                  "relative flex flex-1 flex-col items-center justify-center gap-y-4 p-3 md:gap-y-5"
                }
              >
                <Image
                  src={NotesIMG}
                  alt={"Notes"}
                  className={
                    "pointer-events-none absolute left-1/2 top-1/2 -z-0 w-full -translate-x-1/2 -translate-y-1/2 select-none opacity-10 lg:top-1/3"
                  }
                />
                <Title
                  component={"h1"}
                  size={"6xl"}
                  className={"relative text-ok_main-700"}
                >
                  <span
                    className={
                      "bg-gradient-to-br from-ok_orange-300 to-ok_orange-500 bg-clip-text px-1 text-transparent"
                    }
                  >
                    Ostap
                  </span>{" "}
                  Konashuk
                </Title>
                <p
                  className={
                    "relative rounded-md bg-ok_main-700 px-3 py-1 font-bold uppercase text-white"
                  }
                >
                  accordionist -{" "}
                  <span className={"text-nowrap"}>music teacher</span> -
                  arranger
                </p>
                <ul
                  className={
                    "relative space-y-2 py-5 font-cormorant text-2xl font-semibold italic text-ok_main-600 md:space-y-3 md:text-3xl"
                  }
                >
                  {features.map((f) => (
                    <li key={f} className={"flex items-center gap-x-4"}>
                      <BsFillCheckSquareFill className={"size-7"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={
                    "relative w-full max-w-[500px] overflow-hidden rounded-xl"
                  }
                >
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute -left-2 top-0 max-w-10 rotate-45 select-none opacity-70"
                    }
                  />
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute left-[40%] top-[28%] max-w-10 -rotate-[20deg] select-none opacity-70"
                    }
                  />
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute -top-[5%] right-[10%] max-w-10 rotate-[55deg] select-none opacity-70"
                    }
                  />
                  <div className={"z-10 bg-white/60 p-4 backdrop-blur-sm"}>
                    <p className={"mb-4 text-center text-xl text-ok_main-600"}>
                      Book a{" "}
                      <span
                        className={
                          "bg-gradient-to-br from-ok_orange-300 to-ok_orange-400 bg-clip-text font-bold text-transparent"
                        }
                      >
                        FREE
                      </span>{" "}
                      trial lesson
                    </p>
                    <HeroEmailForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
