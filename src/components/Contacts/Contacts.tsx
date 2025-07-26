import { Container, Motion, Title } from "common";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import OstapIMG from "resources/ostap.png";

export default function Contacts() {
  return (
    <section>
      <Container>
        <div className={"py-8"}>
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
              Contacts
            </Title>
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"flex flex-col gap-y-4 md:flex-row"}
          >
            <div
              className={
                "relative aspect-[4/3] flex-1 overflow-hidden rounded-xl md:mr-4"
              }
            >
              <Image
                src={OstapIMG}
                alt={"Ostap Konashuk"}
                fill
                className={"object-cover"}
                priority
              />
            </div>
            <div className={"flex-1"}>
              <Title size={"2xl"} className={"mb-4 uppercase"}>
                Ostap Konashuk
              </Title>
              <div>
                <ul className={"flex flex-col gap-y-2"}>
                  <li className={"flex items-center gap-x-4"}>
                    <SiGmail className={"size-5 text-red-500"} />
                    <Link
                      className={
                        "font-semibold text-ok_main-700 transition-colors hover:text-ok_orange-500 hover:underline"
                      }
                      href={"mailto:ostap.konashuk@gmail.com"}
                      target={"_blank"}
                    >
                      ostap.konashuk@gmail.com
                    </Link>
                  </li>
                  <li className={"flex items-center gap-x-4"}>
                    <FaPhone className={"size-5 text-ok_main-700"} />
                    <Link
                      className={
                        "font-semibold text-ok_main-700 transition-colors hover:text-ok_orange-500 hover:underline"
                      }
                      href={"tel:+491605705055"}
                      target={"_blank"}
                    >
                      +49 160 570 50 55
                    </Link>
                  </li>
                  <li className={"flex items-center gap-x-4"}>
                    <IoLogoWhatsapp
                      className={"size-5 scale-110 text-green-500"}
                    />

                    <Link
                      className={
                        "font-semibold text-ok_main-700 transition-colors hover:text-ok_orange-500 hover:underline"
                      }
                      href={"https://wa.me/380635309443"}
                      target={"_blank"}
                    >
                      +380 63 530 94 43
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Motion>
        </div>
      </Container>
    </section>
  );
}
