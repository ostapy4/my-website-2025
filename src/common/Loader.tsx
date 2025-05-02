import { CgSpinnerTwo } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

import { cn } from "utils/cn";

export type LoaderProps = {
  className?: {
    wrapper?: string;
    icon?: string;
  };
};

export function Loader(props: LoaderProps) {
  const { className = {} } = props;
  const { wrapper = "", icon: iconClassName = "" } = className;

  return (
    <div className={twMerge("flex items-center justify-center", wrapper)}>
      <CgSpinnerTwo
        className={cn("size-12 animate-spin text-ok_main-300", iconClassName)}
      />
    </div>
  );
}
