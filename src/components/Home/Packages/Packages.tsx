"use client";

import { PackageCard } from "./PackageCard";
import { Container, Title } from "common";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { Motion } from "common/Motion";

const plans = [
  {
    title: "Free Trial Lesson",
    description: "Your first introductory lesson — free!",
    duration: "30 minutes",
    price: "FREE",
    plan: "free",
    link: "https://calendly.com/ostap-konashuk/accordion-lesson-free-trial",
  },
  {
    title: "Single Lesson",
    description: "One flexible 55-minute lesson to fit your schedule and needs",
    duration: "55 minutes",
    price: "$35",
    plan: "single-lesson",
    link: "https://calendly.com/ostap-konashuk/accordion-lesson",
  },
  {
    title: "Monthly Plan (4 lessons)",
    description: "4 lessons per month (1 lesson per week)",
    duration: "55 minutes",
    price: "$130",
    plan: "4-lessons",
    link: "https://buy.stripe.com/bJe00idsK4TLg8P2DzeEo02",
  },
  {
    title: "Intensive Monthly Plan (8 lessons)",
    description: "8 lessons per month (2 lessons per week)",
    duration: "55 minutes",
    price: "$250",
    plan: "8-lessons",
    link: "https://buy.stripe.com/9B6dR888q3PH8Gn4LHeEo03",
  },
];

export function Packages() {
  // Title animation
  const titleRef = useRef(null);
  const titleControls = useAnimation();
  const titleInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, x: 0 });
    }
  }, [titleInView, titleControls]);

  // Cards animation (grid)
  const gridRef = useRef(null);
  const gridControls = useAnimation();
  const gridInView = useInView(gridRef, { once: true });

  useEffect(() => {
    if (gridInView) {
      gridControls.start("visible");
    }
  }, [gridInView, gridControls]);

  return (
    <section className={"pb-16 pt-12"}>
      <Container>
        <Motion
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleControls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title size={"6xl"} className={"mb-6 text-center md:mb-8 lg:mb-10"}>
            Music Lesson Plans
          </Title>
        </Motion>

        <Motion
          ref={gridRef}
          initial={"hidden"}
          animate={gridControls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className={
            "grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 md:gap-x-0 lg:grid-cols-4 lg:gap-x-4"
          }
        >
          {plans.map((p, idx) => (
            <Motion
              key={p.title + idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={"flex flex-col items-center"}
            >
              <PackageCard
                plan={p}
                classNames={{
                  titleWrapper:
                    p.plan === "free" ? "from-lime-600 to-lime-800" : "",
                  button: p.plan === "free" ? "from-lime-600 to-lime-800" : "",
                }}
              />
            </Motion>
          ))}
        </Motion>
      </Container>
    </section>
  );
}
