import { Slider } from "./Slider";
import { Container } from "common";

import { prismaDB } from "lib/db";

export async function Reviews() {
  const reviews = await prismaDB.review.findMany();
  return (
    <section>
      <Container>
        <div className={"py-8"}>
          <Slider data={reviews} />
        </div>
      </Container>
    </section>
  );
}
