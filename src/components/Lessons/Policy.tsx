import { Container, Title } from "common";
import { IoWarning } from "react-icons/io5";

import { Motion } from "common/Motion";

export function Policy() {
  return (
    <section>
      <Container>
        <Motion
          as={"p"}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={"mb-8 flex items-center text-lg italic text-ok_main-600"}
        >
          <IoWarning className={"mr-2 inline-block text-ok_orange-400"} />
          If you prefer a lesson length different from the options above, just
          let me know — we can customize the duration to suit your needs!
        </Motion>
        <div className={"space-y-4 py-12 text-ok_main-600"}>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Title component={"h5"} size={"3xl"} className={"mb-6"}>
              📌 Lesson Policy (Please Read):
            </Title>
          </Motion>
          <Motion
            as={"p"}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"text-lg"}
          >
            To make the most of your learning and keep things running smoothly,
            here are a few simple guidelines:
          </Motion>
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"ml-6 list-inside list-disc space-y-2"}
          >
            <li>Each lesson lasts 55 minutes.</li>
            <li>
              Lessons are scheduled once a week as part of the monthly plan.
            </li>
            <li>
              <span className={"font-bold"}>Consistency is key</span> – regular
              attendance helps you progress faster.
            </li>
            <li>
              If you need to cancel or reschedule, please let me know at least
              24 hours in advance.
            </li>
            <li>
              Missed lessons or late cancellations cannot be refunded or
              transferred to the next month.
            </li>
          </Motion>
          <Motion
            as={"p"}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"text-lg"}
          >
            This policy helps keep the schedule fair for everyone and encourages
            a stable learning routine.
          </Motion>
          <Motion
            as={"p"}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={"text-lg font-bold italic text-ok_main-600"}
          >
            Thank you for your understanding!
          </Motion>
        </div>
      </Container>
    </section>
  );
}
