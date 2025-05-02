import { Container, Title } from "common";

export default async function CheckoutPage({
  // params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;
  return (
    <section>
      <Container>
        <div className={"py-40 text-center"}>
          <p className={"mb-8 text-xl italic"}>Page is under development</p>
          <Title className={"mb-6"}>Checkout Page</Title>
          <p>For Sheet music ID: {id}</p>
        </div>
      </Container>
    </section>
  );
}
