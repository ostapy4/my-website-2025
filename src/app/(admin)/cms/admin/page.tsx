import { Suspense } from "react";

import GallerySection from "app/(admin)/_components/Home/GallerySection";
import HeroSection from "app/(admin)/_components/Home/HeroSection";

import { Loader } from "common/Loader";

export default function AdminHomePage() {
  return (
    <>
      <Suspense fallback={<Loader variants={"cms"} />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loader variants={"cms"} />}>
        <GallerySection />
      </Suspense>
    </>
  );
}
