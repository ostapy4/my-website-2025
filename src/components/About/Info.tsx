import { Container, Title } from "common";
import { GoDash } from "react-icons/go";

const data = [
  {
    id: "lin986sfgs6fdgsdfg",
    header: "Education",
    info: [
      {
        title: "National Music Academy of Ukraine (2009 – 2015)",
        description: [
          "Master’s degree with Honours (musical art master, artist-soloist-instrumentalist, concert performer, lecturer of Higher Educational Institutions of III-IV accreditation degree - Accordion)",
          "Bachelor of music art (Accordion)",
        ],
      },
      {
        title: "Volyn State College of Culture and Art (2005 – 2009)",
        description: [
          "Diploma - artist of the orchestra (ensemble), Accordion, Sopilka (Recorder), leader of the orchestra and lecturer",
        ],
      },
    ],
  },
  {
    id: "hjkl234523v6n29570287",
    header: "Experience",
    info: [
      {
        title:
          "Ukrainian National Orchestra of Folk Instruments (NAOFI) (2023 – 2024)",
        description: ["Playing Accordion as part of the orchestra"],
      },
      {
        title: "Kyiv Tango Orchestra (2020 – 2024)",
        description: ["Playing Accordion as part of the quartet"],
      },
      {
        title: "The Parisian Macao (2016 – 2020)",
        description: [
          "Performing accordion as a soloist and within a group on a daily basis at the Parisian hotel",
          "Special events and roadshow performances within and outside of Macao",
          "Sound technician training at the Venetian Macao",
          "Public relations with the guests",
        ],
      },
      {
        title:
          "Ukrainian Folklore-Ethnographic Ensemble “Kalyna” (2015 – 2016)",
        description: [
          "Accompaniment as an Accordionist for the dance group",
          "Playing Sopilka and Accordion as part of the orchestra",
        ],
      },
    ],
  },
];

export function Info() {
  return (
    <section className={"mb-24"}>
      <Container>
        <div className={"space-y-16"}>
          {data.map((block) => (
            <Block key={block.id} data={block} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type BlockProps = {
  data: {
    header: string;
    info: { title: string; description: string[] }[];
  };
};
export function Block({ data }: BlockProps) {
  const { header, info } = data;
  return (
    <div>
      <Title component={"h3"} className={"mb-5"}>
        {header}
      </Title>
      <div className={"space-y-4"}>
        {info.map(({ title, description }, Idx) => (
          <div key={title + Idx}>
            <Title component={"h4"} size={"3xl"} className={"mb-2"}>
              {title}
            </Title>
            <ul className={"space-y-3"}>
              {description.map((p) => (
                <li key={p}>
                  <p className={"text-ok_main-500"}>
                    <GoDash className={"mx-3 inline-block text-ok_main-600"} />
                    {p}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
