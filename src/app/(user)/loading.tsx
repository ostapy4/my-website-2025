import { Loader } from "common/Loader";

export default function Loading() {
  return (
    <section className={"flex h-screen items-center justify-center"}>
      <Loader />
    </section>
  );
}
