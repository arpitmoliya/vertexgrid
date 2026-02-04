import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { cn } from "../../../lib/cn";
import { SectionShell } from "./SectionShell";

export function RoomMatters({
  id,
  patternImage,
  imageSrc,
  copy,
}: {
  id?: string;
  patternImage: string;
  imageSrc: string;
  copy: {
    titlePrefix: string;
    titleBrand: string;
    titleSuffix: string;
    cards: readonly { title: string; body: string }[];
    noteTop: string;
    noteBottom: string;
  };
}) {
  return (
    <SectionShell
      id={id}
      patternImage={patternImage}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                {copy.titlePrefix}
                <span className="text-brand">{copy.titleBrand}</span>
                {copy.titleSuffix}
              </h2>

              <div className="mt-8 space-y-6">
                {copy.cards.map((c) => (
                  <Card
                    key={c.title}
                    className="rounded-2xl border-zinc-200/60 bg-white p-6 shadow-soft"
                  >
                    <div className="text-lg font-semibold text-zinc-900">
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-zinc-600">
                      {c.body}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="overflow-hidden h-full rounded-2xl shadow-[0_24px_50px_rgba(15,23,42,.18)]">
                <img
                  src={imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <Card
            className={cn(
              "mt-10 rounded-2xl border-zinc-200/60 bg-white p-6 shadow-soft"
            )}
          >
            <div className="text-base font-medium text-zinc-900">
              {copy.noteTop}
            </div>
            <div className="mt-3 text-lg font-semibold italic text-zinc-900">
              {copy.noteBottom}
            </div>
          </Card>
        </div>
      </Container>
    </SectionShell>
  );
}
