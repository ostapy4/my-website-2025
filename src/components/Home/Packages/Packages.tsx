import { Container, MotionDiv, Title } from "common";

import { PackageCard } from "./PackageCard";

const plans = [
  {
    title: "Trial Lesson",
    description: "The first 30-minute lesson focuses on introductions",
    price: "FREE",
  },
  {
    title: "Full Lesson",
    description:
      "A full-hour lesson aimed at uncovering your desires and goals.",
    price: "$35",
  },
  {
    title: "3 lessons",
    description: "A 3-lesson program to get you started with the fundamentals",
    price: "$100",
    fullPrice: "$105",
  },
  {
    title: "10 lessons",
    description:
      "A 10-lesson program combining a comprehensive approach with specific, measurable results",
    price: "$330",
    fullPrice: "$350",
  },
];

export function Packages() {
  return (
    <section className={"pb-16 pt-12"}>
      <Container>
        <div>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title size={"6xl"} className={"mb-6 text-center md:mb-8 lg:mb-10"}>
              Music Lesson Plans
            </Title>
          </MotionDiv>
          <MotionDiv
            initial={"hidden"}
            whileInView={"visible"}
            transition={{
              staggerChildren: 0.3,
            }}
            viewport={{ once: true }}
            className={
              "grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 md:gap-x-0 lg:grid-cols-4 lg:gap-x-4"
            }
          >
            {plans.map((p, Idx) => {
              if (Idx === 0)
                return (
                  <MotionDiv
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    key={p.title + Idx}
                    className={"flex flex-col items-center"}
                  >
                    <PackageCard
                      plan={p}
                      classNames={{
                        titleWrapper: "from-lime-600 to-lime-800",
                        button: "from-lime-600 to-lime-800",
                      }}
                    />
                  </MotionDiv>
                );
              return (
                <MotionDiv
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  key={p.title + Idx}
                  className={"flex flex-col items-center"}
                >
                  <PackageCard plan={p} key={p.title + Idx} />
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
