"use client";

import { DOMMotionComponents, MotionProps, motion } from "motion/react";
import { ComponentProps, ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "utils/cn";

type MotionTag = keyof DOMMotionComponents;

type MotionComponentProps<T extends MotionTag> = {
  as?: T;
  children?: ReactNode;
  className?: HTMLAttributes<HTMLElement>["className"];
} & MotionProps &
  ComponentProps<T>;

export function Motion<T extends MotionTag = "div">({
  as,
  children,
  className,
  ...props
}: MotionComponentProps<T>) {
  const Component = (motion[as || "div"] as ElementType) || motion.div;

  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}
