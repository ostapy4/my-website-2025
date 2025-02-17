import { Container, MotionDiv, Title } from "common";
import Image from "next/image";
import Link from "next/link";
import OstapIMG from "resources/ostap.png";

export default function Contacts() {
  return (
    <section>
      <Container>
        <div className={"py-8"}>
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
              Contacts
            </Title>
          </MotionDiv>
          <MotionDiv
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
                <ul>
                  <li>
                    <span>Email: </span>
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
                  <li>
                    <span>Tel: </span>
                    <Link
                      className={
                        "font-semibold text-ok_main-700 transition-colors hover:text-ok_orange-500 hover:underline"
                      }
                      href={"tel:+491715491948"}
                      target={"_blank"}
                    >
                      +49 171 549 19 48
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
