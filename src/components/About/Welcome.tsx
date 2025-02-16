import { Container, Title } from "common";

const text = [
  "Ostap is a professional accordionist and music teacher, a graduate of the National Music Academy, with over 28 years of experience playing the accordion.",
  'Throughout his career, he has performed in more than 25 countries, collaborated with renowned musicians, and participated in numerous musical projects, including Kyiv Tango Orchestra, the National Academic Orchestra of Folk Instruments of Ukraine, the "Kalyna" ensemble, the "Svitanok" ensemble, and others.',
  "Currently, Ostap combines active performance in projects such as Bass & Bus and Just Like Jazz, while also offering individual online lessons for students of all levels. He helps develop accordion playing techniques and musicality, working with students from all over the world, particularly from the USA and China.",
];

export function Welcome() {
  return (
    <section>
      <Container>
        <div className={"py-12 text-center"}>
          <Title size={"6xl"} className={"mb-8 text-ok_main-700"}>
            About me
          </Title>
          <div
            className={"mx-auto max-w-[860px] space-y-3 md:text-lg lg:text-xl"}
          >
            {text.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
