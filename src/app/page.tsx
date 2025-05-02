import {
  Gallery,
  Hero,
  Packages,
  Reviews,
  VideoGallery,
} from "components/Home";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <VideoGallery />
      <Reviews />
      <Packages />
    </>
  );
}
