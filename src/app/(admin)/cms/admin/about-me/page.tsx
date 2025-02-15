import { Suspense } from "react";

import InfoSection from "app/(admin)/_components/About/InfoSection";

import { Loader } from "common/Loader";

export default function AdminAboutPage() {
  return (
    <>
      {/* Welcome section */}
      <Suspense fallback={<Loader variants={"cms"} />}>
        <InfoSection />
      </Suspense>
    </>
  );
}
