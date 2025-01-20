import { Container, Title } from "common";

export function PageTitle() {
  return (
    <section>
      <Container>
        <div className={"py-12 text-center"}>
          <Title size={"6xl"} className={"text-ok_main-700"}>
            About me
          </Title>
        </div>
      </Container>
    </section>
  );
}
