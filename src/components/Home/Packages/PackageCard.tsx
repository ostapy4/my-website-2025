"use client";

import { Title } from "common";
import Link from "next/link";

import { Button } from "common/UI";

import { cn } from "utils/cn";

import { MainUrls } from "route-urls";

type Plan = {
  title: string;
  description: string;
  price: string;
  fullPrice?: string;
  plan?: string;
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
  const { title, description, price, fullPrice } = plan;
  return (
    <div
      className={
        "flex h-full min-h-96 w-full max-w-80 flex-col items-center overflow-hidden rounded-2xl bg-ok_main-50"
      }
    >
      <div
        className={cn(
          "w-full bg-gradient-to-br from-ok_main-600 to-ok_main-900 px-2 py-6",
          classNames?.titleWrapper,
        )}
      >
        <Title
          component={"h4"}
          size={"3xl"}
          className={cn(
            "text-center font-mont uppercase not-italic text-ok_main-50",
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
        )}{" "}
        <span
          className={"text-4xl font-bold uppercase italic text-ok_main-700"}
        >
          {price}
        </span>
      </div>
      <div className={"flex-1 px-2 py-4"}>
        <p
          className={
            "line-clamp-6 text-center font-cormorant text-xl italic text-ok_main-600"
          }
        >
          {description}
        </p>
      </div>
      <div className={"w-full px-2 py-3"}>
        <Link
          href={`${MainUrls.getContacts()}?plan=${plan?.plan}`}
          className={"block"}
        >
          <Button fullWidth className={{ button: classNames?.button }}>
            Book
          </Button>
        </Link>
      </div>
    </div>
  );
};
