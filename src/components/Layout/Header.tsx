"use client";

import { Transition } from "@headlessui/react";
import { Container } from "common";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import AccordionIMG from "resources/accordion.png";
import Logo from "resources/logo.svg";

import { ButtonBase } from "common/UI";

import { cn } from "utils/cn";

import { MainUrls } from "route-urls";

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
    <>
      <motion.header
        variants={{
          hidden: { y: "-100%" },
          visible: { y: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={
          "sticky top-0 z-50 bg-gradient-to-br from-ok_main-600 to-ok_main-900 py-5"
        }
      >
        <Container>
          <div className={"flex items-center justify-between"}>
            <Link href={MainUrls.getHome()} className={"cursor-pointer"}>
              <Image src={Logo} alt={"Logo"} />
            </Link>
            <nav
              className={
                "hidden items-center gap-x-10 font-cormorant text-xl italic text-ok_main-100 lg:flex"
              }
            >
              <ul className={"flex items-center gap-6 xl:gap-8"}>
                {routes.map(({ href, label }, Idx) => (
                  <motion.li
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * Idx,
                        ease: "easeInOut",
                        duration: 0.3,
                      },
                    }}
                    key={href + Idx}
                    className={cn(
                      "relative transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:transition-[width] before:duration-300",
                      {
                        "text-white before:w-full": pathname === href,
                        "hover:text-white before:hover:w-full":
                          pathname !== href,
                      },
                    )}
                  >
                    <Link href={href}>{label}</Link>
                  </motion.li>
                ))}
              </ul>
              <div className={"flex items-center gap-x-2"}>
                {socials.map(({ href, icon }, Idx) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 0.2 * Idx + 0.8,
                        ease: "easeInOut",
                        duration: 0.5,
                      },
                    }}
                    key={href}
                  >
                    <Link
                      href={href}
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
                  </motion.div>
                ))}
              </div>
            </nav>
            <ButtonBase
              onClick={() => setIsMenuOpen(true)}
              className={{ button: "lg:hidden" }}
            >
              <CgMenuRight
                className={
                  "size-7 text-ok_main-100 transition-colors duration-300 hover:text-white"
                }
              />
            </ButtonBase>
          </div>
        </Container>
      </motion.header>
      <Transition show={isMenuOpen}>
        <div
          className={
            "fixed inset-0 z-[51] bg-ok_main-400/10 backdrop-blur-sm transition-opacity data-[closed]:opacity-0"
          }
        />
      </Transition>
      <Transition show={isMenuOpen}>
        <div
          className={
            "fixed inset-y-0 right-0 z-[52] w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ok_main-600 to-ok_main-900 transition-[opacity,transform] duration-300 ease-in-out data-[closed]:translate-x-full data-[closed]:opacity-0 sm:max-w-[480px] lg:hidden"
          }
        >
          <div className={"relative h-full overflow-y-auto px-3 py-5"}>
            <nav
              className={
                "flex h-full flex-col items-center justify-between gap-y-8 pt-12 font-cormorant text-3xl italic text-ok_main-100"
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
                        delay: 0.2 * Idx + 0.2,
                        ease: "easeInOut",
                        duration: 1,
                      },
                    }}
                    key={href + Idx}
                  >
                    <Link
                      className={cn(
                        "relative transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:transition-all before:duration-300",
                        {
                          "text-white before:w-full": pathname === href,
                          "hover:text-white before:hover:w-full":
                            pathname !== href,
                        },
                      )}
                      onClick={() => setIsMenuOpen(false)}
                      href={href}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                      ease: "easeInOut",
                      staggerChildren: 0.3,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial={"hidden"}
                animate={"visible"}
                className={"flex items-center gap-x-5"}
              >
                {socials.map(({ href, icon }) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    key={href}
                  >
                    <Link
                      href={href}
                      target={"_blank"}
                      className={
                        "group relative inline-flex size-10 items-center justify-center overflow-hidden rounded-md border border-ok_main-200 bg-ok_main-100/5 p-1 text-ok_main-200 shadow-[0_0_7px_rgba(255,255,255,0.2)] backdrop-blur transition-[color,transform,border-color] duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                      }
                    >
                      {icon}
                      <span
                        className={
                          "absolute left-0 top-0 size-3 -translate-x-1.5 -translate-y-1.5 rounded-full border-[0.5px] border-ok_main-200 transition-colors duration-300 group-hover:border-white"
                        }
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </nav>
          </div>
          <ButtonBase
            onClick={() => setIsMenuOpen(false)}
            className={{ button: "absolute right-4 top-6" }}
          >
            <CgClose
              className={
                "size-7 text-ok_main-100 transition-colors duration-300 hover:text-white lg:hidden"
              }
            />
          </ButtonBase>
          <Image
            src={AccordionIMG}
            alt={"Accordion"}
            className={
              "absolute left-1/2 top-[62%] -z-10 max-w-[90%] -translate-x-1/2 -translate-y-1/2 opacity-5"
            }
          />
        </div>
      </Transition>
    </>
  );
}
