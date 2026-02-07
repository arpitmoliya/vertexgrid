import type { HTMLAttributes } from "react";

import { cn } from "../../../lib/cn";

export function SectionShell({
  className,
  watermarkLeft,
  waterMarkSize = 560,
  ...props
}: HTMLAttributes<HTMLElement> & {
  watermarkLeft?: "left" | "right";
  waterMarkSize?: number;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)} {...props}>
      {watermarkLeft ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage: `url(/images/watermark.webp)`,
            backgroundPosition:
              watermarkLeft === "left" ? "left center" : "right center",
            backgroundSize: `${waterMarkSize}px ${waterMarkSize}px`,
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
          }}
        />
      ) : null}
      <div className="relative">{props.children}</div>
    </section>
  );
}
