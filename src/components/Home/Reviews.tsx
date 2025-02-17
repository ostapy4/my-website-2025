import { Container, MotionDiv, Title } from "common";
import Image from "next/image";

type Review = {
  id: string;
  username: string;
  message: string;
  avatar: string;
};

const data: Review[] = [
  {
    id: "ddavcxzasd",
    username: "Mark",
    message:
      "Ive had 2 lessons with Ostap so far and my experience has been phenomenal, Ostap is very patient, friendly and competent. Highly recommend him to anyone searching for a chromatic button accordion teacher.",
    avatar: "",
  },
  {
    id: "hjkbvftyfghjvb",
    username: "Kendall",
    message:
      "Ostap is a very friendly and knowledgeable instructor. He's patient and good at adjusting the lessons to the individual student. I'm looking forward to taking more lessons from him.",
    avatar: "",
  },
  {
    id: "ghjhftyufgjhkvbn",
    username: "Olivia",
    message:
      "In this lesson, Ostap went through the details of liber tango with me and taught me chords in F major. He is very professional, patient and good humored. He incorporates accordion learning and music theory in a way that one builds a solid musical mind for future self learning. I strongly recommend his music lessons!",
    avatar: "",
  },
  {
    id: "jkiv78tiygubhjgv",
    username: "Pam",
    message:
      "Ostap is a wonderful teacher! My son really feels lucky that he found an accordion teacher who not only is incredibly knowledgeable about music and the accordion, but is also able to communicate and accommodate him easily with virtual lessons. Ostap is the perfect blend of patient and encouraging during my son’s lessons. Highly recommend!",
    avatar: "",
  },
];

export function Reviews() {
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
            {data.map((review) => (
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
                key={review.id}
              >
                <ReviewItem data={review} />
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
              {data.username.slice(0, 1).toUpperCase() || "N"}
            </span>
          )}
        </div>
        <Title className={"text-ok_main-700"} size={"2xl"} component={"h4"}>
          {data.username}
        </Title>
      </div>
      <p className={"text-sm italic"}>{data.message}</p>
    </div>
  );
};
