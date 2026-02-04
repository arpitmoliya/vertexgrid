import type { HTMLAttributes } from "react";

import { cn } from "../../../lib/cn";

export function SectionShell({
  className,
  patternImage,
  ...props
}: HTMLAttributes<HTMLElement> & { patternImage?: string }) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      {patternImage ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      ) : null}
      <div className="relative">{props.children}</div>
    </section>
  );
}
