import { Card } from "../../../components/ui/Card";
import { Container } from "../../../components/ui/Container";
import { SectionShell } from "./SectionShell";

export function BuiltBy({
  id,
  patternImage,
  copy,
}: {
  id?: string;
  patternImage: string;
  copy: {
    titlePrefix: string;
    titleBrand: string;
    body1: string;
    body2: string;
    experienceTitle: string;
    experience: readonly string[];
    closing: string;
  };
}) {
  return (
    <SectionShell
      id={id}
      patternImage={patternImage}
      className="bg-[#f4f6f8] py-14 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {copy.titlePrefix}
            <span className="text-brand">{copy.titleBrand}</span>
          </h2>

          <Card className="mx-auto mt-10 max-w-4xl rounded-[28px] border-2! border-[#0E1C29]! bg-white p-8 shadow-softLg sm:p-12">
            <p className="text-sm leading-6 text-zinc-700 sm:text-base">
              {copy.body1}
            </p>
            <p className="mt-6 text-sm leading-6 text-zinc-700 sm:text-base">
              {copy.body2}
            </p>

            <div className="mt-10 text-lg font-semibold text-zinc-900">
              {copy.experienceTitle}
            </div>

            <div className="mt-5 space-y-4 text-sm text-zinc-800 sm:text-base">
              {copy.experience.map((e) => (
                <div key={e}>{e}</div>
              ))}
            </div>

            <p className="mt-10 text-sm leading-6 text-zinc-700 sm:text-base">
              {copy.closing}
            </p>
          </Card>
        </div>
      </Container>
    </SectionShell>
  );
}
