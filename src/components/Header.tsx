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

import { motion } from "motion/react";
import { delay } from "motion";

const links = [
  {
    href: MainUrls.getHome(),
    label: "Home",
  },
  {
    href: MainUrls.getAboutMe(),
    label: "About me",
  },
  {
    href: MainUrls.getSheets(),
    label: "Sheets",
  },
  {
    href: MainUrls.getContactMe(),
    label: "Contact me",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <header
      className={"py-5 bg-gradient-to-br from-ok_main-600 to-ok_main-900"}
    >
      <Container>
        <div className={"flex justify-between items-center"}>
          <Link href={MainUrls.getHome()}>
            <Image src={Logo} alt={"Logo"} />
          </Link>
          <nav
            className={
              "hidden lg:block text-ok_main-100 font-cormorant italic text-xl"
            }
          >
            <ul className={"flex items-center gap-12"}>
              {links.map(({ href, label }, Idx) => (
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
            "lg:hidden fixed inset-y-0 right-0 w-full max-w-screen-sm bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ok_main-600 to-ok_main-900 data-[closed]:opacity-0 data-[closed]:translate-x-full data:[transition] transition-[opacity,transform] duration-300 overflow-hidden"
          }
        >
          <div className={"relative px-3 py-5 overflow-y-auto h-screen"}>
            <nav
              className={
                "text-ok_main-100 font-cormorant italic text-3xl mt-16"
              }
            >
              <motion.ul
                variants={containerVariants}
                initial={"hidden"}
                animate={"visible"}
                className={"flex flex-col items-center gap-12"}
              >
                {links.map(({ href, label }, Idx) => (
                  <motion.li variants={itemVariants} key={href + Idx}>
                    <Link
                      className={cn(
                        "relative before:absolute before:bottom-0 before:left-0 before:w-0  before:h-0.5 before:bg-gradient-to-r before:from-ok_main-300 before:to-ok_main-500 before:rounded-full before:transition-all before:duration-300 transition-colors duration-300",
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
              </motion.ul>
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
    </header>
  );
}
