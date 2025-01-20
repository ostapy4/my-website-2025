import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type ButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "primary" | "secondary";
  fullWidth?: boolean;
} & ButtonBaseProps<T>;

export function Button<T>(props: ButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "primary",
    fullWidth = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer justify-center rounded-lg text-center font-bold transition-[color,transform] disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          {
            // Primary
            "bg-gradient-to-br from-ok_orange-300 to-ok_orange-400 text-white":
              colorVariant === "primary",
            "hover:text-ok_main-50 disabled:hover:text-white sm:active:scale-95":
              colorVariant === "primary" && !loading,
          },
          {
            "w-full": fullWidth,
            "px-3 py-1.5 text-sm": size === "small",
            "px-6 py-2": size === "normal",
            "px-8 py-2.5": size === "large",
          },
          className?.button,
        ),
        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  );
}
