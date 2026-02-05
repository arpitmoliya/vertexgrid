import { FormDialog } from "./FormDialog";
import { ExecutiveApplicationForm } from "./ExecutiveApplicationForm";
import { SponsorInquiryForm } from "./SponsorInquiryForm";

export type LandingFormType = "executive" | "sponsor" | null;

export function LandingForms({
  openForm,
  onOpenChange,
}: {
  openForm: LandingFormType;
  onOpenChange: (form: LandingFormType) => void;
}) {
  const open = openForm !== null;
  const title =
    openForm === "sponsor" ? "Sponsor Inquiry" : "Executive Application";
  const description =
    openForm === "sponsor"
      ? "Sponsorship inquiry form for VertexGrid Exchange - AI Edition ."
      : "Executive application form for VertexGrid Exchange - AI Edition.";

  return (
    <FormDialog
      open={open}
      onOpenChange={(next) => onOpenChange(next ? openForm : null)}
      title={title}
      description={description}
    >
      {openForm === "sponsor" ? (
        <SponsorInquiryForm onSubmitted={() => onOpenChange(null)} />
      ) : (
        <ExecutiveApplicationForm onSubmitted={() => onOpenChange(null)} />
      )}
    </FormDialog>
  );
}
