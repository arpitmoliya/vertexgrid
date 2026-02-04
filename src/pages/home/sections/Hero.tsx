import { LogoMark } from "../../../components/branding/Logo";
import { Button } from "../../../components/ui/Button";
import { Container } from "../../../components/ui/Container";

export function Hero({
  backgroundImage,
  copy,
  onApplyToAttend,
  onApplyAsSponsor,
}: {
  backgroundImage: string;
  copy: {
    headline: string;
    subheadline: string;
    bodyTop: string;
    bodyBottom: string;
  };
  onApplyToAttend?: () => void;
  onApplyAsSponsor?: () => void;
}) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-zinc-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/35 via-black/55 to-black/75"
      />

      <Container className="relative py-8 sm:py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center flex-col gap-3">
            <div className="p-2.5 rounded-2xl bg-white">
              <LogoMark className="size-15 text-white" />
            </div>
            <div className="leading-none">
              <div className="text-lg font-semibold tracking-[0.3em] text-white">
                VERTEXGRID
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Button
              size="sm"
              className="rounded-xl bg-white text-zinc-950 hover:bg-white/90"
              onClick={onApplyToAttend}
            >
              Apply to Attend
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10"
              onClick={onApplyAsSponsor}
            >
              Apply as a Sponsor
            </Button>
          </div>
        </div>

        <div className="mt-14 max-w-3xl pb-10 sm:mt-20 sm:pb-14">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {copy.headline}
          </h1>

          <p className="mt-6 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {copy.subheadline}
          </p>

          <div className="mt-6 space-y-4 text-sm leading-6 text-white/80 sm:text-base">
            <p>{copy.bodyTop}</p>
            <p>{copy.bodyBottom}</p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="md"
              variant="secondary"
              className="rounded-xl border-white/40 bg-transparent text-white hover:bg-white/10"
              onClick={onApplyToAttend}
            >
              Apply to Attend
            </Button>
            <Button
              size="md"
              className="rounded-xl bg-white text-zinc-950 hover:bg-white/90"
              onClick={onApplyAsSponsor}
            >
              Apply as a Sponsor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
