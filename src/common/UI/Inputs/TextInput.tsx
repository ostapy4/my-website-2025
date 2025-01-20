import { clsx } from "clsx";
import { forwardRef, useId, useState } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  label?: string;
  className?: {
    label?: string;
    inputWrapper?: string;
    input?: string;
  };
  helperText?: string;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type TextInputProps =
  | ({
      multiline?: false;
    } & BaseProps &
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">)
  | ({
      multiline: true;
    } & BaseProps &
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">);

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>((props, ref) => {
  const {
    label,
    className,
    helperText,
    error,
    startAdornment,
    endAdornment,
    multiline = false,
    ...inputProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  const Component = multiline ? "textarea" : "input";

  return (
    <div className={"flex w-full flex-col gap-y-1"}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge("text-sm font-medium", className?.label)}
        >
          {label}
        </label>
      )}

      <div
        className={twMerge(
          clsx(
            "flex flex-nowrap items-center overflow-hidden rounded-lg border bg-ok_main-50 text-ok_main-600 transition-colors duration-300",
            {
              "border-ok_main-500 hover:border-ok_main-400":
                !isFocused && !error,
              "border-ok_main-900": isFocused && !error,
              "border-red-500": error,
            },
            className?.inputWrapper,
          ),
        )}
      >
        {startAdornment && <div className={"pl-3"}>{startAdornment}</div>}

        <Component
          id={id}
          className={twMerge(
            "block flex-1 bg-transparent px-3 py-2.5 caret-ok_main-700 outline-none placeholder:text-ok_main-700/30",
            className?.input,
          )}
          // @ts-expect-error ref discrimination error
          ref={ref}
          // @ts-expect-error ref discrimination error
          type={multiline ? undefined : (inputProps.type ?? "text")}
          {...{
            ...inputProps,
            onFocus: (e) => {
              // @ts-expect-error ref discrimination error
              inputProps?.onFocus?.(e);
              setIsFocused(true);
            },
            onBlur: (e) => {
              // @ts-expect-error ref discrimination error
              inputProps?.onBlur?.(e);
              setIsFocused(false);
            },
          }}
        />

        {endAdornment && <div className={"pr-3"}>{endAdornment}</div>}
      </div>

      {helperText && (
        <p
          className={clsx("text-sm", {
            "text-red-500": error,
            "text-gray-500": !error,
          })}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

TextInput.displayName = "TextInput";
