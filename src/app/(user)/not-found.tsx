import { Container, Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { MainUrls } from "route-urls";

export default function NotFound() {
  return (
    <section>
      <Container>
        <div
          className={
            "flex min-h-[80vh] flex-col items-center justify-center text-center"
          }
        >
          <Title className={"mb-3"}>Not Found</Title>
          <p className={"mb-8 text-xl italic"}>
            Could not find requested resource
          </p>
          <Link href={MainUrls.getHome()}>
            <Button>Return Home</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
