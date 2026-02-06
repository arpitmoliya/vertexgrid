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
          className="pointer-events-none absolute inset-0 mix-blend-multiply -right-1/6"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center right",
            // Use a fixed-ish watermark size so it shows in "empty" space
            // without taking over the whole section.
            backgroundSize: "min(1100px, 92vw) auto",
          }}
        />
      ) : null}
      <div className="relative">{props.children}</div>
    </section>
  );
}
