"use client";

import { Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { cn } from "utils/cn";

type Plan = {
  title: string;
  description: string;
  duration: string;
  price: string;
  fullPrice?: string;
  plan?: string;
  link: string;
};

type PackageCardProps = {
  plan: Plan;
  classNames?: {
    title?: string;
    titleWrapper?: string;
    button?: string;
  };
};

export const PackageCard = ({ plan, classNames }: PackageCardProps) => {
  const { title, description, duration, price, fullPrice } = plan;
  return (
    <div
      className={
        "flex h-full w-full max-w-80 flex-col items-center overflow-hidden rounded-2xl bg-ok_main-50 sm:min-h-96"
      }
    >
      <div
        className={cn(
          "flex h-[6.5rem] w-full items-center justify-center bg-gradient-to-br from-ok_main-600 to-ok_main-900 px-2 py-6",
          classNames?.titleWrapper,
        )}
      >
        <Title
          component={"h4"}
          size={"xl"}
          className={cn(
            "text-balance text-center font-mont uppercase not-italic text-ok_main-50",
            classNames?.title,
          )}
        >
          {title}
        </Title>
      </div>
      <div
        className={
          "w-full bg-[radial-gradient(rgba(110,58,34,.3)_1px,transparent_1px)] bg-[length:4px_4px] bg-repeat px-2 py-4 text-center"
        }
      >
        {fullPrice && (
          <span
            className={
              "text-xl font-medium uppercase italic text-ok_main-700/70 line-through"
            }
          >
            {fullPrice}
          </span>
        )}
        <span
          className={"text-4xl font-bold uppercase italic text-ok_main-700"}
        >
          {price}
        </span>
      </div>
      <div className={"flex flex-1 flex-col justify-between px-2 pb-2 pt-4"}>
        <p
          className={
            "line-clamp-6 text-center font-cormorant text-xl italic text-ok_main-600"
          }
        >
          {description}
        </p>
        <p className={"text-center font-semibold text-ok_main-600"}>
          {duration}
        </p>
      </div>
      <div className={"w-full px-2 py-3"}>
        <Link href={plan.link} target={"_blank"} className={"block"}>
          <Button fullWidth className={{ button: classNames?.button }}>
            Book
          </Button>
        </Link>
      </div>
    </div>
  );
};
