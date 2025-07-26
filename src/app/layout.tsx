import type { Metadata } from "next";
import { Cormorant_Infant, Montserrat } from "next/font/google";
import { Providers } from "providers";
import { Toaster } from "sonner";

import { Footer, Header } from "components/Layout";

import "styles/tailwind.css";

export const dynamic = "force-dynamic";

const cormorant = Cormorant_Infant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ostap Konashuk",
    template: "%s | O.Konashuk",
  },
  description:
    "Online accordion lessons by professional accordionist Ostap Konashuk. Learn accordion, music theory and technique via video call. Book a free trial.",
  keywords: [
    "accordion",
    "sheet music",
    "lessons",
    "accordion lessons",
    "audio",
    "audio transcription",
    "accordion teacher",
    "arranger",
    "online accordion lessons",
    "accordion teacher online",
    "private accordion lessons",
    "learn accordion online",
    "beginner accordion course",
    "accordion classes via Zoom",
    "accordion for adults online",
    "music lessons accordion online",
    "accordion teacher for beginners",
    "accordion video call lessons",
    "Zoom accordion lessons",
    "music transcription accordion",
    "accordionist Ostap Konashuk",
  ],
  openGraph: {
    title: "Accordion Lessons Online – Ostap Konashuk",
    description:
      "Accordion teacher Ostap Konashuk offers online lessons, sheet music and custom arrangements. Book a free trial lesson right now.",
    url: "https://www.ostap-konashuk.com",
    siteName: "Ostap Konashuk",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ostap Konashuk Accordionist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accordion Lessons Online – Ostap Konashuk",
    description:
      "Accordion teacher Ostap Konashuk offers online lessons, sheet music and custom arrangements. Book a free trial lesson right now.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body
        className={`${cormorant.variable} ${montserrat.variable} bg-ok_main-100 font-mont text-ok_main-500 antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Footer />
        <Toaster
          position={"top-right"}
          richColors
          // icons={{
          //   success: (
          //     <GoCheckCircleFill className={"text-ok_main-600 size-5"} />
          //   ),
          //   error: <BiSolidError className={"text-ok_main-600 size-5"} />,
          // }}
          // toastOptions={
          // {
          // unstyled: true,
          // classNames: {
          //   toast:
          //     "w-full px-3 py-2 rounded-md bg-[linear-gradient(170deg,var(--tw-gradient-stops))] from-ok_main-200 to-ok_main-100 shadow-[2px_4px_8px_rgba(110,58,34,.3)]",
          //   title: "text-ok_main-700",
          // },
          // }
          // }
        />
      </body>
    </html>
  );
}

// toast.error("Hello my little baby", {
//   unstyled: true,
//   classNames: {
//     toast:
//       "w-full px-3 py-2 flex gap-x-2 items-center rounded-md text-ok_main-700 !bg-[linear-gradient(170deg,var(--tw-gradient-stops))] from-ok_main-200 to-ok_main-100 shadow-[2px_4px_8px_rgba(110,58,34,.3)]",
//     title: "",
//   },
// })
