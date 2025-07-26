import { Metadata } from "next";

import { Info, Welcome } from "components/About";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Ostap Konashuk – professional accordionist, teacher, and arranger. Discover his experience, musical background, and teaching philosophy.",
  keywords: [
    "about Ostap Konashuk",
    "accordionist biography",
    "professional accordionist",
    "accordion teacher story",
    "accordion teacher experience",
    "accordion music career",
    "accordion performer",
    "accordion educator",
    "music arranger",
    "Ukrainian accordionist",
  ],
};

export default function AboutMePage() {
  return (
    <>
      <Welcome />
      <Info />
    </>
  );
}
