import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

export function Engage({
  id,
  patternImage,
  copy,
}: {
  id?: string;
  patternImage: string;
  copy: {
    title: string;
    speakingKicker: string;
    cards: readonly { title: string; body: string; center?: boolean }[];
  };
}) {
  const top = copy.cards.filter((c) => !c.center);
  const bottom = copy.cards.find((c) => c.center);

  return (
    <SectionShell
      id={id}
      patternImage={patternImage}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {copy.title}
          </h2>

          <Card className="mx-auto mt-10 max-w-5xl rounded-[28px] border-zinc-200/60 bg-[#546E7A]/5! p-8 shadow-[0_28px_60px_rgba(15,23,42,.12)]! backdrop-blur sm:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              {top.map((c) => (
                <Card
                  key={c.title}
                  className="rounded-2xl border-zinc-200/60 bg-[#F6FBFF]! p-8 text-center shadow-[0_14px_28px_rgba(15,23,42,.12)]!"
                >
                  <div className="text-sm font-semibold text-zinc-900">
                    {c.title}
                  </div>
                  <div className="mt-3 text-sm text-zinc-600">{c.body}</div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center text-lg font-semibold italic text-zinc-900">
              {copy.speakingKicker}
            </div>

            {bottom ? (
              <div className="mt-6 flex justify-center">
                <Card className="w-full max-w-md rounded-2xl border-zinc-200/60 bg-[#F6FBFF]! p-8 text-center shadow-[0_14px_28px_rgba(15,23,42,.12)]!">
                  <div className="text-sm font-semibold text-zinc-900">
                    {bottom.title}
                  </div>
                  <div className="italic text-sm text-zinc-600">
                    Apply to Attend and select 'Panel Interest'
                  </div>
                  <div className="mt-3 text-sm text-zinc-600">
                    {bottom.body}
                  </div>
                </Card>
              </div>
            ) : null}
          </Card>
        </div>
      </Container>
    </SectionShell>
  );
}
