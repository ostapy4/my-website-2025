import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "utils/cn";

type GradientButtonProps = PropsWithChildren<HTMLAttributes<HTMLButtonElement>>;

export const GradientButton = ({
  children,
  className,
  ...props
}: GradientButtonProps) => {
  return (
    <button
      className={cn(
        "group flex items-center justify-center rounded-full border-[0.6px] border-white/50 bg-gradient-to-br from-white/20 from-30% via-white/70 to-white/20 to-70% p-2 shadow-[0px_2px_8px_rgba(69,41,37,.05)] backdrop-blur md:p-3",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
