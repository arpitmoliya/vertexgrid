import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center cursor-pointer justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:pointer-events-none disabled:opacity-50",
          size === "sm" && "h-9 px-4 text-sm",
          size === "md" && "h-11 px-5 text-sm",
          size === "lg" && "h-12 px-6 text-base",
          variant === "primary" &&
            "bg-brand text-white hover:bg-brand/90 active:bg-brand/85",
          variant === "secondary" &&
            "border border-white/20 bg-white/10 text-white hover:bg-white/15 active:bg-white/20",
          variant === "ghost" && "text-white/90 hover:bg-white/10",
          className
        )}
        {...props}
      />
    );
  }
);
