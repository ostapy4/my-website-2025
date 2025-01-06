"use client";

import { Transition } from "@headlessui/react";
import { Container } from "common";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "resources/logo.svg";
import { MainUrls } from "route-urls";
import { cn } from "utils/cn";

import { CgMenuRight, CgClose } from "react-icons/cg";
import { ButtonBase } from "common/UI";
import AccordionIMG from "resources/accordion.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

import { motion, useMotionValueEvent, useScroll } from "motion/react";

export const routes = [
  {
    href: MainUrls.getHome(),
    label: "Home",
  },
  {
    href: MainUrls.getAboutMe(),
    label: "About Me",
  },
  {
    href: MainUrls.getAcccordionLessons(),
    label: "Accordion Lessons Online",
  },
  {
    href: MainUrls.getSheetMusic(),
    label: "Sheet Music",
  },
  {
    href: MainUrls.getContacts(),
    label: "Contacts",
  },
];

export const socials = [
  {
    href: "https://www.facebook.com/ostap.konashuk",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.instagram.com/ostap_konashuk?igsh=NDRldnYxcjMxcmt2&utm_source=qr",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.youtube.com/@OstapKonashuk",
    icon: <FaYoutube />,
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <motion.header
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={
        "sticky top-0 z-50 py-5 bg-gradient-to-br from-ok_main-600 to-ok_main-900"
      }
    >
      <Container>
        <div className={"flex justify-between items-center"}>
          <Link href={MainUrls.getHome()}>
            <Image src={Logo} alt={"Logo"} />
          </Link>
          <nav
            className={
              "hidden lg:flex items-center gap-x-10 text-ok_main-100 font-cormorant italic text-xl"
            }
          >
            <ul className={"flex items-center gap-8"}>
              {routes.map(({ href, label }, Idx) => (
                <li
                  key={href + Idx}
                  className={cn(
                    "transition-all duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:scale-x-0 before:origin-left before:h-0.5 before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:rounded-full before:transition-all before:duration-300",
                    {
                      "before:scale-x-100 text-white": pathname === href,
                      "before:hover:scale-100 hover:text-white":
                        pathname !== href,
                    }
                  )}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
            <div className={"flex gap-x-2 items-center"}>
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
          <ButtonBase
            onClick={() => setIsMenuOpen(true)}
            className={{ button: "lg:hidden" }}
          >
            <CgMenuRight
              className={
                "size-7 text-ok_main-100 hover:text-white transition-colors duration-300"
              }
            />
          </ButtonBase>
        </div>
      </Container>
      <Transition show={isMenuOpen}>
        <div
          className={
            "fixed inset-0 z-[51] backdrop-blur-sm bg-ok_main-400/10 data-[closed]:opacity-0 transition-opacity"
          }
        />
      </Transition>
      <Transition show={isMenuOpen}>
        <div
          className={
            "lg:hidden fixed inset-y-0 right-0 w-full sm:max-w-[480px] z-[52] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ok_main-600 to-ok_main-900 data-[closed]:opacity-0 data-[closed]:translate-x-full transition-[opacity,transform] ease-in-out duration-300 overflow-hidden"
          }
        >
          <div className={"relative px-3 py-5 overflow-y-auto h-full"}>
            <nav
              className={
                "text-ok_main-100 font-cormorant italic text-3xl flex flex-col gap-6 items-center justify-between"
              }
            >
              <ul className={"flex flex-col items-center gap-12"}>
                {routes.map(({ href, label }, Idx) => (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.15 * Idx + 0.2,
                        ease: "easeInOut",
                      },
                    }}
                    key={href + Idx}
                  >
                    <Link
                      className={cn(
                        "relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:rounded-full before:transition-all before:duration-300 transition-colors duration-300",
                        {
                          "before:w-full text-white": pathname === href,
                          "before:hover:w-full hover:text-white":
                            pathname !== href,
                        }
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      href={href}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className={"flex gap-x-2 items-center"}>
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
          </div>
          <ButtonBase
            onClick={() => setIsMenuOpen(false)}
            className={{ button: "absolute top-6 right-4" }}
          >
            <CgClose
              className={
                "lg:hidden size-7 text-ok_main-100 hover:text-white transition-colors duration-300"
              }
            />
          </ButtonBase>
          <Image
            src={AccordionIMG}
            alt={"Accordion"}
            className={
              "absolute -z-10 top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 max-w-[90%]"
            }
          />
        </div>
      </Transition>
    </motion.header>
  );
}
