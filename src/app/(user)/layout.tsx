import type { Metadata } from "next";
import { Cormorant_Infant, Montserrat } from "next/font/google";
import { Toaster } from "sonner";

import { Footer, Header } from "components/Layout";
import { LenisProvider } from "components/LenisProvider";

import "lenis/dist/lenis.css";

import "styles/tailwind.css";

// export const dynamic = "force-dynamic";

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
  description: "Welcome to Ostap Konashuk website",
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
        <main>{children}</main>
        <Footer />
        <LenisProvider />
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
