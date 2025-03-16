import GallerySection from "app/(admin)/_components/Home/GallerySection";
import HeroSection from "app/(admin)/_components/Home/HeroSection";
import ReviewsSection from "app/(admin)/_components/Home/ReviewsSection";

export default function AdminHomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <ReviewsSection />
    </>
  );
}
