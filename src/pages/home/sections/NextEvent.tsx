import type { JSX } from "react";
import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

function MetaIcon({ name }: { name: "pin" | "clock" | "user" }) {
  const paths: Record<typeof name, JSX.Element> = {
    pin: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
          stroke="#0073FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          stroke="#0073FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    clock: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V12L16 14"
          stroke="#FFD900"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#FFD900"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    user: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
          stroke="#FF00C4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719"
          stroke="#FF00C4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
          stroke="#FF00C4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke="#FF00C4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-lg">
      {paths[name]}
    </div>
  );
}

function ScheduleColumn({
  items,
  align = "top",
  className,
}: {
  items: readonly { time: string; label: string }[];
  align?: "top" | "bottom";
  className?: string;
}) {
  return (
    <div className="relative h-full">
      <div
        aria-hidden="true"
        className={[
          "absolute bottom-2 w-1  border-l-4 border-dashed border-white/70",
          "left-3",
          // align === "top"
          //   ? "-top-10 h-[110%] lg:h-full lg:-top-[42%]"
          //   : "-top-14 h-[131%] lg:h-full lg:top-[39%]",
          className,
        ].join(" ")}
      />

      <div
        className={[
          "flex h-full flex-col",
          align === "top" ? "justify-start" : "justify-end",
        ].join(" ")}
      >
        <div className="space-y-10">
          {items.map((it) => (
            <div
              key={it.time}
              className={[
                "relative flex flex-col items-start gap-3",
                "pl-10",
              ].join(" ")}
            >
              <div
                aria-hidden="true"
                className="absolute left-0.5 top-2 h-6 w-6 rounded-full border-4 border-white bg-transparent"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-[#00B3DF] to-[#1A237E]"
                />
              </div>

              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white shadow-sm">
                {it.time}
              </div>
              <div className="text-base font-medium text-white/95">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NextEvent({
  id,
  copy,
}: {
  id?: string;
  copy: {
    kicker: string;
    titlePrefix: string;
    titleBrand: string;
    subtitle: string;
    meta: readonly { label: string }[];
    schedule: readonly { time: string; label: string }[];
    chips: readonly string[];
  };
}) {
  const left = copy.schedule.slice(0, 3);
  const right = copy.schedule.slice(3);
  const iconOrder: Array<"pin" | "clock" | "user"> = ["pin", "clock", "user"];

  return (
    <SectionShell id={id} className="bg-[#f4f6f8] py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-4xl font-semibold tracking-[0.35em] text-zinc-900">
            {copy.kicker}
          </div>
          <h2 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {copy.titlePrefix}
            <span className="text-brand">{copy.titleBrand}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-pretty text-sm leading-6 text-zinc-700 sm:text-base">
            {copy.subtitle}
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-8 text-sm text-zinc-900">
            {copy.meta.map((m, idx) => (
              <div key={m.label} className="flex items-center gap-2">
                <span>
                  <MetaIcon name={iconOrder[idx] ?? "pin"} />
                </span>
                <span className="font-semibold">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[36px] border-none bg-linear-to-b from-[#00B3DF]  to-[#1A237E] shadow-[0_34px_80px_rgba(15,23,42,.35)]">
          <div className="grid md:h-[520px] gap-12 px-8 py-10 sm:px-10 sm:py-12 md:grid-cols-2 md:gap-20">
            <ScheduleColumn
              items={left}
              align="top"
              className="-top-10 h-[110%] md:h-full md:-top-[42%]!"
            />
            <ScheduleColumn
              items={right}
              align="bottom"
              className="-top-14 h-[131%] md:h-full md:top-[34%]"
            />
          </div>
        </Card>

        <div className="mx-auto mt-10 grid max-w-[817px] gap-3 sm:grid-cols-2">
          {copy.chips.map((c) => (
            <div
              key={c}
              className="rounded-full bg-white px-5 py-3 text-center text-sm text-zinc-700 shadow-inner"
            >
              {c}
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
