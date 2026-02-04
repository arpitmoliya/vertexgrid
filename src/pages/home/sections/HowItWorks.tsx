import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

export function HowItWorks({
  id,
  patternImage,
  copy,
}: {
  id?: string;
  patternImage: string;
  copy: {
    titlePrefix: string;
    titleBrand: string;
    titleSuffix: string;
    subtitle: string;
    steps: readonly { number: string; title: string; description: string }[];
  };
}) {
  const top = copy.steps.slice(0, 3);
  const bottom = copy.steps.slice(3);

  return (
    <SectionShell
      id={id}
      patternImage={patternImage}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {copy.titlePrefix}
            <span className="text-brand">{copy.titleBrand}</span>
            {copy.titleSuffix}
          </h2>
          <p className="mt-3 text-sm font-medium text-zinc-700 sm:text-base">
            {copy.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {top.map((s) => (
              <StepCard key={s.number} step={s} />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:px-24">
            {bottom.map((s) => (
              <StepCard key={s.number} step={s} />
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

function StepCard({
  step,
}: {
  step: { number: string; title: string; description: string };
}) {
  return (
    <Card className="rounded-3xl border-zinc-200/60 bg-[#ECEDF1]! p-8 text-center shadow-soft">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 shadow-inner">
        <div className="text-2xl font-extrabold tracking-tight text-brand">
          {step.number}
        </div>
      </div>
      <div className="mt-6 text-lg font-semibold text-zinc-900">
        {step.title}
      </div>
      <div className="mt-2 text-sm leading-6 text-zinc-600">
        {step.description}
      </div>
    </Card>
  );
}
