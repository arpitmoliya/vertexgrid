import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

function BulletList({
  items,
  tone = "neutral",
}: {
  items: readonly string[];
  tone?: "neutral" | "brand";
}) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={[
              "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              tone === "brand"
                ? "bg-brand/10 text-brand"
                : "bg-zinc-100 text-zinc-700",
            ].join(" ")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M20 6 9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Sponsorship({
  id,
  images,
  copy,
  onApplyAsSponsor,
}: {
  id?: string;
  images: { handshake: string; analytics: string };
  copy: {
    title: string;
    subtitle: string;
    sponsorsGainTitle: string;
    sponsorsGain: readonly string[];
    sponsorsReceiveTitle: string;
    sponsorsReceiveIntro: string;
    sponsorsReceive: readonly string[];
    sponsorsReceiveFooter: string;
    protectsTitle: string;
    protects: readonly string[];
    cta: string;
  };
  onApplyAsSponsor?: () => void;
}) {
  return (
    <SectionShell
      id={id}
      watermarkLeft="right"
      waterMarkSize={1000}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border-zinc-200/60 bg-white p-7 shadow-soft">
              <div className="text-2xl font-semibold text-brand">
                {copy.title}
              </div>
              <div className="mt-2 text-m text-black font-semibold">
                {copy.subtitle}
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-brand">
                  {copy.sponsorsGainTitle}
                </div>
                <BulletList items={copy.sponsorsGain} tone="neutral" />
              </div>

              <div className="mt-6 flex justify-center">
                <Button
                  className="rounded-xl bg-[#0B1B4A]! text-white hover:bg-[#0B1B4A]/90!"
                  onClick={onApplyAsSponsor}
                >
                  {copy.cta}
                </Button>
              </div>
            </Card>

            <div className="overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(15,23,42,0.18)]">
              <img
                src={images.handshake}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(15,23,42,.18)]">
              <img
                src={images.analytics}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <Card className="rounded-3xl border-zinc-200/60 bg-white p-7 shadow-soft h-full">
              <div className="text-2xl font-semibold text-brand">
                Intelligence you can't buy from traditional analyst reports.
              </div>

              <Card className="mt-6 rounded-2xl border-zinc-200/60 bg-[#f8fbff] p-5 shadow-sm">
                <div className="text-sm font-semibold text-brand">
                  {copy.sponsorsReceiveIntro}
                </div>
                <BulletList items={copy.sponsorsReceive} tone="neutral" />
              </Card>

              <p className="mt-4 text-sm leading-6 text-zinc-700">
                {copy.sponsorsReceiveFooter}
              </p>

              <Card className="mt-6 rounded-2xl border-zinc-200/60 bg-[#f8fbff] p-5 shadow-sm">
                <div className="text-sm font-semibold text-brand">
                  {copy.protectsTitle}
                </div>
                <BulletList items={copy.protects} tone="brand" />
              </Card>
            </Card>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
