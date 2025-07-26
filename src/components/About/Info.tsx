import { Container, Motion, Title } from "common";
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
        <div className={"divide-y-[1px] divide-ok_main-700"}>
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
    <div className={"py-12"}>
      <Motion
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Title component={"h3"} className={"mb-8 md:mb-12"}>
          {header}
        </Title>
      </Motion>

      <div className={"space-y-12"}>
        {details.map(({ id, title, description, image }, Idx) => (
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            key={id}
            className={cn("flex flex-col gap-x-4 gap-y-6 md:flex-row", {
              "md:flex-row-reverse": Idx % 2 !== 0,
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
            <Image
              src={image}
              alt={"Image"}
              width={340}
              height={260}
              className={"mx-auto rounded-xl"}
            />
          </Motion>
        ))}
      </div>
    </div>
  );
}
