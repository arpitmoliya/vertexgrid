import type { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200/60 bg-white shadow-sm",
        className
      )}
      {...props}
    />
  );
}
