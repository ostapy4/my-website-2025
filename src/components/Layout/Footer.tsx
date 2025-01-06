"use client";

import { Container } from "common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "resources/logo.svg";
import { MainUrls } from "route-urls";
import { cn } from "utils/cn";
import { routes, socials } from "components/Layout";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={
        "bg-[linear-gradient(160deg,var(--tw-gradient-stops))] from-ok_main-900 from-[3%] via-ok_main-700 via-20% md:via-25% to-ok_main-900 to-45% md:to-55%"
      }
    >
      <Container>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 pb-5 pt-6"}>
          <nav className={"flex flex-col justify-between gap-y-4"}>
            <Link href={MainUrls.getHome()}>
              <Image src={Logo} alt={"Logo"} />
            </Link>
            <div className={"hidden md:flex gap-x-3 items-center"}>
              {socials.map(({ href, icon }) => (
                <Link
                  href={href}
                  key={href}
                  target={"_blank"}
                  className={
                    "relative size-8 p-1 border rounded-md inline-flex items-center justify-center border-ok_main-200 hover:border-white text-ok_main-200 hover:text-white hover:-translate-y-1 transition-[color,transform,border-color] duration-300 overflow-hidden group bg-ok_main-100/5 backdrop-blur shadow-[0_0_7px_rgba(255,255,255,0.2)]"
                  }
                >
                  {icon}
                  <span
                    className={
                      "absolute rounded-full size-3 border-[0.5px] border-ok_main-200 top-0 left-0 -translate-x-1.5 -translate-y-1.5  transition-colors duration-300 group-hover:border-white"
                    }
                  />
                </Link>
              ))}
            </div>
          </nav>

          <nav className={"text-ok_main-100 font-cormorant italic text-xl"}>
            <ul className={"sm:columns-2 columns-1 space-y-4 gap-4"}>
              {routes.map(({ href, label }, Idx) => (
                <li key={href + Idx}>
                  <Link
                    className={cn(
                      "transition-all duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:scale-x-0 before:origin-left before:h-0.5 before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:rounded-full before:transition-all before:duration-300",
                      {
                        "before:scale-x-100 text-white": pathname === href,
                        "before:hover:scale-100 hover:text-white":
                          pathname !== href,
                      }
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={"flex md:hidden gap-x-4 items-center"}>
            {socials.map(({ href, icon }) => (
              <Link
                href={href}
                key={href}
                target={"_blank"}
                className={
                  "relative size-8 p-1 border rounded-md inline-flex items-center justify-center border-ok_main-200 hover:border-white text-ok_main-200 hover:text-white hover:-translate-y-1 transition-[color,transform,border-color] duration-300 overflow-hidden group bg-ok_main-100/5 backdrop-blur shadow-[0_0_7px_rgba(255,255,255,0.2)]"
                }
              >
                {icon}
                <span
                  className={
                    "absolute rounded-full size-3 border-[0.5px] border-ok_main-200 top-0 left-0 -translate-x-1.5 -translate-y-1.5  transition-colors duration-300 group-hover:border-white"
                  }
                />
              </Link>
            ))}
          </div>
        </div>
        <div
          className={
            "text-center text-sm text-ok_main-400/50 pb-5 pt-3 border-t border-ok_main-400/20"
          }
        >
          <p>&copy; 2025 Ostap Konashuk</p>
        </div>
      </Container>
    </footer>
  );
}
