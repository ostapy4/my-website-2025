import { PackageCard } from "./PackageCard";
import { Container, MotionDiv, Title } from "common";

const plans = [
  {
    title: "Free Trial Lesson",
    description: "Your first introductory lesson — free!",
    duration: "30 minutes",
    price: "FREE",
    plan: "free",
  },
  {
    title: "Single Lesson",
    description: "One flexible 55-minute lesson to fit your schedule and needs",
    duration: "55 minutes",

    price: "$35",
    plan: "single-lesson",
  },
  {
    title: "Monthly Plan (4 lessons)",
    description: "4 lessons per month (1 lesson per week)",
    duration: "55 minutes",

    price: "$130",
    plan: "4-lessons",
  },
  {
    title: "Intensive Monthly Plan (8 lessons)",
    description: "8 lessons per month (2 lessons per week)",
    duration: "55 minutes",

    price: "$250",
    plan: "8-lessons",
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
            {plans.map((p, Idx) => (
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
                    titleWrapper:
                      p.plan === "free" ? "from-lime-600 to-lime-800" : "",
                    button:
                      p.plan === "free" ? "from-lime-600 to-lime-800" : "",
                  }}
                />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}
