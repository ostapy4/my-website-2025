import type { Metadata } from "next";
import { Montserrat, Cormorant_Infant } from "next/font/google";
import "styles/tailwind.css";
import { Header } from "components/Header";

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
  description: "Welcome to Ostap Konashuk website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-mont text-ok_main-500 bg-ok_main-100 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
