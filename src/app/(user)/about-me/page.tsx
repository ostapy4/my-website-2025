import { Suspense } from "react";

import { Loader } from "common/Loader";
import { Info, Welcome } from "components/About";

export default function AboutMePage() {
  return (
    <>
      <Welcome />
      <Suspense fallback={<Loader />}>
        <Info />
      </Suspense>
    </>
  );
}
