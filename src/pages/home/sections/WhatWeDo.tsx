import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

export function WhatWeDo({
  id,
  copy,
}: {
  id?: string;
  copy: {
    titlePrefix: string;
    titleBrand: string;
    titleSuffix: string;
    lead: string;
    bulletsIntro: string;
    bullets: readonly string[];
    bullets2Intro: string;
    bullets2: readonly string[];
    tiles: readonly {
      title: string;
      items: readonly { bold: string; rest: string }[];
    }[];
  };
}) {
  return (
    <SectionShell
      id={id}
      watermarkLeft="right"
      waterMarkSize={800}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <Card className="mx-auto  max-w-5xl rounded-3xl border-zinc-200/70 bg-[#ECEDF1]! p-6 shadow-soft sm:p-10">
          <div className="mx-auto max-w-5xl text-center pb-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {copy.titlePrefix}
              <span className="text-brand">{copy.titleBrand}</span>
              {copy.titleSuffix}
            </h2>
          </div>
          <Card className="rounded-2xl border-zinc-200/60 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,.10)] sm:p-8">
            <div className="text-lg font-semibold text-zinc-900 sm:text-xl">
              {copy.lead}
            </div>

            <div className="mt-6 text-sm font-medium text-zinc-900 sm:text-base">
              {copy.bulletsIntro}
            </div>
            <ul className="mt-3 space-y-3 text-sm text-zinc-700 sm:text-base">
              {copy.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
                  <span className="leading-6">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-sm font-medium text-zinc-900 sm:text-base">
              {copy.bullets2Intro}
            </div>
            <ul className="mt-3 space-y-3 text-sm text-zinc-700 sm:text-base">
              {copy.bullets2.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
                  <span className="leading-6">{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.tiles.map((tile) => (
              <Card
                key={tile.title}
                className="rounded-2xl border-zinc-200/60 bg-[#f8fbff] p-6 shadow-[0_14px_28px_rgba(15,23,42,.12)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 7H7C5.34267 7 4 8.34267 4 10V24C4 25.6573 5.34267 27 7 27H25C26.6573 27 28 25.6573 28 24V10C28 8.34267 26.6573 7 25 7ZM20.5 23H11.5C10.1187 23 9 21.8813 9 20.5C9 19.1187 10.1187 18 11.5 18H20.5C21.8813 18 23 19.1187 23 20.5C23 21.8813 21.8813 23 20.5 23Z"
                        fill="#774BE5"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M7 27C5.34267 27 4 25.6573 4 24V10C4 8.34267 5.34267 7 7 7H25C26.6573 7 28 8.34267 28 10V24C28 25.6573 26.6573 27 25 27H7Z"
                        stroke="#774BE5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 7V2"
                        stroke="#774BE5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 13.5C9 12.672 9.672 12 10.5 12C11.328 12 12 12.672 12 13.5C12 14.328 11.328 15 10.5 15C9.672 15 9 14.328 9 13.5Z"
                        fill="#774BE5"
                      />
                      <path
                        d="M20 13.5C20 12.672 20.672 12 21.5 12C22.328 12 23 12.672 23 13.5C23 14.328 22.328 15 21.5 15C20.672 15 20 14.328 20 13.5Z"
                        fill="#774BE5"
                      />
                      <path
                        d="M11.5 23C10.1187 23 9 21.8813 9 20.5C9 19.1187 10.1187 18 11.5 18H20.5C21.8813 18 23 19.1187 23 20.5C23 21.8813 21.8813 23 20.5 23H11.5Z"
                        stroke="#774BE5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 18V23"
                        stroke="#774BE5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 18V23"
                        stroke="#774BE5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="text-base font-semibold text-zinc-900">
                    {tile.title}
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                  {tile.items.map((it) => (
                    <li key={it.bold} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                      <span className="leading-6">
                        <span className="font-semibold text-brand">
                          {it.bold}
                        </span>
                        {it.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Card>
      </Container>
    </SectionShell>
  );
}
