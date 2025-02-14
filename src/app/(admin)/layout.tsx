import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Cormorant_Infant, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import { extractRouterConfig } from "uploadthing/server";

import { Navbar } from "app/(admin)/_components/Navbar";
import { ourFileRouter } from "app/(admin)/api/uploadthing/core";

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
    default: "Admin",
    template: "%s | Admin",
  },
  description: "Ostap Konashuk admin page",
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body
        className={`${cormorant.variable} ${montserrat.variable} bg-ok_main-100 font-mont text-ok_main-900 antialiased`}
        suppressHydrationWarning
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Navbar />
        <main>{children}</main>
        <Toaster position={"top-right"} richColors />
      </body>
    </html>
  );
}
