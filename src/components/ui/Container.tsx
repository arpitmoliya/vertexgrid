import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide";
};

export function Container({ className, size = "default", ...props }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6",
        size === "default" ? "max-w-6xl" : "max-w-7xl",
        className
      )}
      {...props}
    />
  );
}
