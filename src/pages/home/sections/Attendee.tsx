import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

export function Attendee({
  id,
  copy,
  onApplyToAttend,
}: {
  id?: string;
  copy: {
    titlePrefix: string;
    titleBrand: string;
    boxes: readonly { title: string; body: string; wide?: boolean }[];
    cta: string;
  };
  onApplyToAttend?: () => void;
}) {
  const [a, b, c] = copy.boxes;

  return (
    <SectionShell
      id={id}
      watermarkLeft="left"
      waterMarkSize={500}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {copy.titlePrefix}
            <span className="text-brand">{copy.titleBrand}</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[a, b].map((box) => (
              <Card
                key={box.title}
                className="rounded-2xl border-zinc-200/60 bg-[#546E7A]/5! p-6 shadow-soft"
              >
                <div className="text-sm font-semibold text-brand">
                  {box.title}
                </div>
                <div className="mt-3 text-sm leading-6 text-zinc-700 sm:text-base">
                  {box.body}
                </div>
              </Card>
            ))}
          </div>

          {c ? (
            <Card className="mt-6 rounded-2xl border-zinc-200/60 bg-[#546E7A]/5! p-6 shadow-soft">
              <div className="text-sm font-semibold text-brand">{c.title}</div>
              <div className="mt-3 text-sm leading-6 text-zinc-700 sm:text-base">
                {c.body}
              </div>
            </Card>
          ) : null}

          <div className="mt-10 flex justify-center">
            <Button
              className="rounded-xl bg-[#0B1B4A]! text-white hover:bg-[#0B1B4A]/90!"
              onClick={onApplyToAttend}
            >
              {copy.cta}
            </Button>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
