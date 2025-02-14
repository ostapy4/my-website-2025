import { Container, Title } from "common";
import Image from "next/image";
import { GoDash } from "react-icons/go";

import { prismaDB } from "lib/db";
import { cn } from "utils/cn";

export async function Info() {
  const sections = await prismaDB.section.findMany({
    include: {
      details: true,
    },
  });

  if (!sections || !sections.length) return null;

  return (
    <section className={"mb-24"}>
      <Container>
        <div className={"space-y-16"}>
          {sections.map((section) => (
            <Block key={section.id} data={section} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type BlockProps = {
  data: {
    id: string;
    header: string;
    details: {
      id: string;
      title: string;
      description: string[];
      image: string;
      sectionId: string;
    }[];
  };
};
export function Block({ data }: BlockProps) {
  const { header, details = [] } = data;
  return (
    <div>
      <Title component={"h3"} className={"mb-12"}>
        {header}
      </Title>
      <div className={"space-y-6"}>
        {details.map(({ id, title, description, image }, Idx) => (
          <div
            key={id}
            className={cn("flex gap-x-4", {
              "flex-row-reverse": Idx % 2 !== 0,
            })}
          >
            <div className={"flex-1"}>
              <Title component={"h4"} size={"3xl"} className={"mb-2"}>
                {title}
              </Title>
              <ul className={"space-y-3"}>
                {description.map((p) => (
                  <li key={p}>
                    <p className={"text-ok_main-500"}>
                      <GoDash
                        className={"mx-3 inline-block text-ok_main-600"}
                      />
                      {p}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                "relative aspect-square w-64 overflow-hidden rounded-2xl"
              }
            >
              <Image
                src={image}
                alt={"Image"}
                className={"object-cover"}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
