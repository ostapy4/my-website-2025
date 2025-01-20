import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type IconButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "default";
} & Omit<ButtonBaseProps<T>, "children" | "endIcon">;

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "default",
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer justify-center transition-colors disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          // Default
          {
            "border border-white/10 bg-white/[0.01] backdrop-blur":
              colorVariant === "default",
            "hover:gradient-hot-primary active:bg-main-500 hover:border-0 disabled:hover:bg-white/[0.01]":
              colorVariant === "default" && !loading,
          },
          {
            "h-8 w-8 p-1": size === "small",
            "size-11 p-1": size === "normal",
            "h-12 w-12 p-1": size === "large",
          },
          className?.button,
        ),
        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    ></ButtonBase>
  );
}
