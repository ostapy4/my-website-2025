import { Container, Title } from "common";
import Image from "next/image";
import Link from "next/link";
import OstapIMG from "resources/ostap.png";

export default function Contacts() {
  return (
    <section>
      <Container>
        <div className={"py-8"}>
          <Title size={"6xl"} className={"mb-12 text-center text-ok_main-700"}>
            Contacts
          </Title>
          <div className={"flex flex-col gap-y-4 md:flex-row"}>
            <div
              className={
                "relative aspect-video flex-1 overflow-hidden rounded-xl md:mr-4"
              }
            >
              <Image
                src={OstapIMG}
                alt={"Ostap Konashuk"}
                fill
                className={"object-cover"}
              />
            </div>
            <div className={"flex-1"}>
              <Title size={"2xl"} className={"mb-4 uppercase"}>
                Ostap Konashuk Music
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
          </div>
        </div>
      </Container>
    </section>
  );
}
