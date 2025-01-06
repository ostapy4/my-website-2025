import { Container, Title } from "common";
import OstapIMG from "components/Home/static/ostap.jpg";
import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";
import NotesIMG from "components/Home/static/notes.svg";
import KeyIMG from "components/Home/static/music-key.svg";
const features = ["Accordion lessons", "Sheet music", "Audio transcription"];

export function Hero() {
  return (
    <section className={"bg-ok_main-100"}>
      <Container>
        <div className={"min-h-[calc(100vh-77px)] py-8 flex"}>
          <div
            className={
              "flex shadow-[0_0_50px_rgba(110,58,34,.5),inset_0_0_20px_rgba(110,58,34,.5)] rounded-[32px] bg-ok_main-100 w-full"
            }
          >
            <div
              className={"flex overflow-hidden rounded-3xl p-3 gap-3 w-full"}
            >
              <div className={"relative flex-1 overflow-hidden rounded-3xl"}>
                <Image
                  src={OstapIMG}
                  alt={"Ostap Konashuk"}
                  fill
                  className={"object-cover object-top saturate-50"}
                />
              </div>
              <div
                className={
                  "relative flex-1 p-3 flex flex-col items-center justify-center gap-y-5"
                }
              >
                <Image
                  src={NotesIMG}
                  alt={"Notes"}
                  className={
                    "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 opacity-10"
                  }
                />
                <Title
                  component={"h1"}
                  size={"6xl"}
                  className={"text-ok_main-700 relative"}
                >
                  <span
                    className={
                      "bg-gradient-to-br from-ok_orange-300 to-ok_orange-500 text-transparent bg-clip-text px-1"
                    }
                  >
                    Ostap
                  </span>{" "}
                  Konashuk
                </Title>
                <p
                  className={
                    "relative uppercase bg-ok_main-700 rounded-md px-3 py-1 text-white font-bold"
                  }
                >
                  accordionist - music teacher - arranger
                </p>
                <ul
                  className={
                    "relative text-3xl font-semibold text-ok_main-600 space-y-3 font-cormorant italic py-5"
                  }
                >
                  {features.map((f) => (
                    <li key={f} className={"flex items-center gap-x-4"}>
                      <BsFillCheckSquareFill className={"size-7"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={"relative w-2/3 overflow-hidden rounded-xl"}>
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute top-0 -left-2 rotate-45 max-w-10 opacity-70"
                    }
                  />
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute top-[28%] left-[40%] -rotate-[20deg] max-w-10 opacity-70"
                    }
                  />
                  <Image
                    src={KeyIMG}
                    alt={"Key"}
                    className={
                      "absolute -top-[5%] right-[10%] rotate-[55deg] max-w-10 opacity-70"
                    }
                  />
                  <div className={"bg-white/60 z-10 backdrop-blur-sm p-4"}>
                    <p className={"text-ok_main-600 text-xl text-center mb-4"}>
                      Book a{" "}
                      <span
                        className={
                          "bg-gradient-to-br from-ok_orange-300 to-ok_orange-400 text-transparent bg-clip-text font-bold"
                        }
                      >
                        FREE
                      </span>{" "}
                      trial lesson
                    </p>
                    <form
                      className={
                        "flex gap-3 overflow-hidden pl-3 bg-white rounded-lg border border-ok_main-600 focus-within:border-ok_main-900 focus-within:hover:border-ok_main-900 hover:border-ok_main-400 transition-colors duration-300"
                      }
                    >
                      <input
                        type="text"
                        placeholder={"Email"}
                        className={
                          "flex-1 outline-none bg-transparent placeholder:text-ok_main-700/30 caret-ok_main-700"
                        }
                      />
                      <button
                        type={"submit"}
                        className={
                          "bg-gradient-to-br from-ok_orange-300 to-ok_orange-400 text-white font-bold px-4 py-2"
                        }
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
