import { Button } from "../../../components/ui/Button";
import { Container } from "../../../components/ui/Container";

export function CtaCard({
  copy,
  onApplyToAttend,
  onApplyAsSponsor,
}: {
  copy: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  onApplyToAttend?: () => void;
  onApplyAsSponsor?: () => void;
}) {
  return (
    <section className="bg-linear-to-b from-cyan-500 via-sky-600 to-indigo-950 py-12 text-white sm:py-14">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-xl font-semibold sm:text-2xl">{copy.title}</div>
          <div className="mt-4 text-balance text-lg font-semibold text-white/90 sm:text-2xl">
            {copy.subtitle}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-xl bg-white px-7 text-zinc-950 hover:bg-white/90"
              onClick={onApplyToAttend}
            >
              {copy.primary}
            </Button>
            <Button
              variant="secondary"
              className="rounded-xl border-white/50 bg-transparent px-7 text-white hover:bg-white/10"
              onClick={onApplyAsSponsor}
            >
              {copy.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
