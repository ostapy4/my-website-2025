"use client";

import { Container } from "common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "resources/logo.svg";

import { routes, socials } from "components/Layout";

import { cn } from "utils/cn";

import { MainUrls } from "route-urls";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={
        "bg-[linear-gradient(160deg,var(--tw-gradient-stops))] from-ok_main-900 from-[3%] via-ok_main-700 via-20% to-ok_main-900 to-45% md:via-25% md:to-55%"
      }
    >
      <Container>
        <div className={"grid grid-cols-1 gap-8 pb-5 pt-6 md:grid-cols-2"}>
          <nav className={"flex flex-col justify-between gap-y-4"}>
            <Link href={MainUrls.getHome()}>
              <Image src={Logo} alt={"Logo"} />
            </Link>
            <div className={"hidden items-center gap-x-3 md:flex"}>
              {socials.map(({ href, icon }) => (
                <Link
                  href={href}
                  key={href}
                  target={"_blank"}
                  className={
                    "group relative inline-flex size-8 items-center justify-center overflow-hidden rounded-md border border-ok_main-200 bg-ok_main-100/5 p-1 text-ok_main-200 shadow-[0_0_7px_rgba(255,255,255,0.2)] backdrop-blur transition-[color,transform,border-color] duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                  }
                >
                  {icon}
                  <span
                    className={
                      "absolute left-0 top-0 size-3 -translate-x-1.5 -translate-y-1.5 rounded-full border-[0.5px] border-ok_main-200 transition-colors duration-300 group-hover:border-white"
                    }
                  />
                </Link>
              ))}
            </div>
          </nav>

          <nav className={"font-cormorant text-xl italic text-ok_main-100"}>
            <ul className={"columns-1 gap-4 space-y-4 sm:columns-2"}>
              {routes.map(({ href, label }, Idx) => (
                <li key={href + Idx}>
                  <Link
                    className={cn(
                      "relative transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:rounded-full before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:transition-all before:duration-300",
                      {
                        "text-white before:scale-x-100": pathname === href,
                        "hover:text-white before:hover:scale-100":
                          pathname !== href,
                      },
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={"flex items-center gap-x-4 md:hidden"}>
            {socials.map(({ href, icon }) => (
              <Link
                href={href}
                key={href}
                target={"_blank"}
                className={
                  "group relative inline-flex size-8 items-center justify-center overflow-hidden rounded-md border border-ok_main-200 bg-ok_main-100/5 p-1 text-ok_main-200 shadow-[0_0_7px_rgba(255,255,255,0.2)] backdrop-blur transition-[color,transform,border-color] duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                }
              >
                {icon}
                <span
                  className={
                    "absolute left-0 top-0 size-3 -translate-x-1.5 -translate-y-1.5 rounded-full border-[0.5px] border-ok_main-200 transition-colors duration-300 group-hover:border-white"
                  }
                />
              </Link>
            ))}
          </div>
        </div>
        <div
          className={
            "border-t border-ok_main-400/20 pb-5 pt-3 text-center text-sm text-ok_main-400/50"
          }
        >
          <p>&copy; 2025 Ostap Konashuk</p>
        </div>
      </Container>
    </footer>
  );
}
