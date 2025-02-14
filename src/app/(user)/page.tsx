import { Suspense } from "react";

import { Loader } from "common/Loader";
import { Gallery, Hero } from "components/Home";
import { Packages } from "components/Home/Packages/Packages";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Gallery />
      </Suspense>
      <Packages />
    </>
  );
}
