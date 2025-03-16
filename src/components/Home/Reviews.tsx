import { Review } from "@prisma/client";
import { Container, MotionDiv, Title } from "common";
import Image from "next/image";

import { prismaDB } from "lib/db";

export async function Reviews() {
  const reviews = await prismaDB.review.findMany();
  return (
    <section>
      <Container>
        <div className={"py-8"}>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title size={"6xl"} className={"mb-8"}>
              Reviews
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
              "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            {reviews?.map((r) => (
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
                key={r.id}
              >
                <ReviewItem data={r} />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </Container>
    </section>
  );
}

const ReviewItem = ({ data }: { data: Review }) => {
  return (
    <div className={"rounded-xl border border-ok_main-500 bg-ok_main-50 p-4"}>
      <div className={"mb-3 flex items-center gap-x-4"}>
        <div
          className={
            "relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-slate-200"
          }
        >
          {data.avatar ? (
            <Image
              src={data.avatar}
              alt={"Avatar"}
              fill
              className={"object-cover"}
            />
          ) : (
            <span className={"text-lg font-bold text-ok_main-300"}>
              {data.name[0].toUpperCase() || "N"}
            </span>
          )}
        </div>
        <Title
          className={"flex-1 text-ok_main-700"}
          size={"2xl"}
          component={"h4"}
        >
          {data.name}
        </Title>
        <span className={"self-start text-sm"}>
          {new Date(data.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className={"text-sm italic"}>{data.text}</p>
    </div>
  );
};
