import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/Button";
import { cn } from "../../lib/cn";
import { submitToEndpoint } from "./formSubmit";
import {
  budgetAuthorityOptions,
  decisionTimelineOptions,
  heardAboutSponsorOptions,
  phoneCountryCodes,
  sponsorshipDecisionFactorOptions,
  sponsorshipInterestOptions,
  sponsorCompanySizeOptions,
  sponsorCompanyTypeOptions,
  sponsorGeographicPresenceOptions,
  sponsorPrimaryGoalsOptions,
  sponsorProductCategoryOptions,
  sponsoredBeforeOptions,
  sponsorTargetCustomerProfileOptions,
  sponsorTargetIndustryOptions,
} from "./options";
import {
  computeSponsorDerived,
  sponsorSchema,
  type SponsorFormValues,
} from "./sponsorSchema";
import {
  CheckboxItem,
  FieldHint,
  FieldLabel,
  Select,
  SubmitBar,
  TextArea,
  TextInput,
} from "./fields";

const SPONSOR_ENDPOINT = import.meta.env.VITE_SPONSOR_FORM_ENDPOINT as
  | string
  | undefined;

function isOther(value: string) {
  return value.toLowerCase().includes("other");
}

export function SponsorInquiryForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
}) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<SponsorFormValues>({
    resolver: zodResolver(sponsorSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      phoneCountryCode: "+91",
      targetIndustries: [],
      primaryGoals: [],
      agree: false,
      website: "",
    },
  });

  // These fields are driven by custom checkbox UI + `setValue` (no native input),
  // so we register them explicitly to keep RHF validation state in sync.
  useEffect(() => {
    form.register("targetIndustries");
    form.register("primaryGoals");
  }, [form]);

  const companyType = form.watch("companyType") ?? "";
  const primaryProductCategory = form.watch("primaryProductCategory") ?? "";
  const targetCustomerProfile = form.watch("targetCustomerProfile") ?? "";
  const decisionFactor = form.watch("decisionFactor") ?? "";
  const heardAbout = form.watch("heardAbout") ?? "";

  const primaryGoals = form.watch("primaryGoals") ?? [];
  const showPrimaryGoalsOther = useMemo(
    () => primaryGoals.includes("Other (please specify)"),
    [primaryGoals]
  );

  const showCompanyTypeOther = useMemo(
    () => isOther(companyType),
    [companyType]
  );
  const showProductOther = useMemo(
    () => isOther(primaryProductCategory),
    [primaryProductCategory]
  );
  const showTargetProfileOther = useMemo(
    () => isOther(targetCustomerProfile),
    [targetCustomerProfile]
  );
  const showDecisionFactorOther = useMemo(
    () => isOther(decisionFactor),
    [decisionFactor]
  );
  const showHeardOther = useMemo(() => isOther(heardAbout), [heardAbout]);

  async function onSubmit(values: SponsorFormValues) {
    setSubmitError(null);

    if (values.website) {
      setSubmitted(true);
      onSubmitted?.();
      return;
    }

    const derived = computeSponsorDerived(values);

    const payload = {
      // Formspree helpers (improve inbox UX)
      _subject: "Sponsorship Inquiry - VertexGrid Exchange - AI Edition",
      _replyto: values.email,
      _gotcha: values.website,
      formType: "sponsor",
      submittedAt: new Date().toISOString(),
      ...values,
      ...derived,
      // keep emails readable (instead of JSON arrays)
      targetIndustries: (values.targetIndustries ?? []).join(", "),
      primaryGoals: (values.primaryGoals ?? []).join(", "),
      companyTypeOther: showCompanyTypeOther ? values.companyTypeOther : "",
      primaryProductCategoryOther: showProductOther
        ? values.primaryProductCategoryOther
        : "",
      targetCustomerProfileOther: showTargetProfileOther
        ? values.targetCustomerProfileOther
        : "",
      decisionFactorOther: showDecisionFactorOther
        ? values.decisionFactorOther
        : "",
      heardAboutOther: showHeardOther ? values.heardAboutOther : "",
      primaryGoalsOther: showPrimaryGoalsOther ? values.primaryGoalsOther : "",
    };

    const res = await submitToEndpoint(SPONSOR_ENDPOINT, payload);
    if (!res.ok) {
      setSubmitError(res.message);
      return;
    }

    setSubmitted(true);
    onSubmitted?.();
  }

  if (submitted) {
    return (
      <div className="py-2">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-700">
          <div className="text-base font-semibold text-zinc-900">
            Thank you!
          </div>
          <p className="mt-2 leading-6">
            We’ll send you the complete sponsorship package, sample intelligence
            report, and anonymized attendee list within 24 hours. You’ll also
            receive a calendar link to schedule a call if you’d like to discuss
            further.
          </p>
        </div>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-sm text-zinc-600">
        Interested in sponsoring VertexGrid Exchange - AI Edition ? Complete
        this form and we’ll send you the full sponsorship package within 24
        hours.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>First Name</FieldLabel>
          <TextInput autoComplete="given-name" {...register("firstName")} />
          {errors.firstName ? (
            <FieldHint tone="error">{errors.firstName.message}</FieldHint>
          ) : null}
        </div>
        <div>
          <FieldLabel required>Last Name</FieldLabel>
          <TextInput autoComplete="family-name" {...register("lastName")} />
          {errors.lastName ? (
            <FieldHint tone="error">{errors.lastName.message}</FieldHint>
          ) : null}
        </div>
      </div>

      <div>
        <FieldLabel required>Email Address</FieldLabel>
        <TextInput type="email" autoComplete="email" {...register("email")} />
        {errors.email ? (
          <FieldHint tone="error">{errors.email.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel required>Phone Number</FieldLabel>
        <div className="mt-2 grid gap-3 sm:grid-cols-[180px_1fr]">
          <Select {...register("phoneCountryCode")}>
            {phoneCountryCodes.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </Select>
          <TextInput
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone number"
            {...register("phoneNumber")}
          />
        </div>
        {errors.phoneCountryCode ? (
          <FieldHint tone="error">{errors.phoneCountryCode.message}</FieldHint>
        ) : null}
        {errors.phoneNumber ? (
          <FieldHint tone="error">{errors.phoneNumber.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel>LinkedIn Profile URL (optional)</FieldLabel>
        <TextInput
          placeholder="https://linkedin.com/in/yourprofile"
          {...register("linkedinUrl")}
        />
        {errors.linkedinUrl ? (
          <FieldHint tone="error">{errors.linkedinUrl.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel required>Job Title</FieldLabel>
        <TextInput {...register("jobTitle")} />
        {errors.jobTitle ? (
          <FieldHint tone="error">{errors.jobTitle.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel required>Company Name</FieldLabel>
        <TextInput autoComplete="organization" {...register("companyName")} />
        {errors.companyName ? (
          <FieldHint tone="error">{errors.companyName.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel required>Company Website</FieldLabel>
        <TextInput
          placeholder="https://yourcompany.com"
          {...register("companyWebsite")}
        />
        {errors.companyWebsite ? (
          <FieldHint tone="error">{errors.companyWebsite.message}</FieldHint>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>Company Type</FieldLabel>
          <Select {...register("companyType")}>
            <option value="">Select</option>
            {sponsorCompanyTypeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.companyType ? (
            <FieldHint tone="error">{errors.companyType.message}</FieldHint>
          ) : null}
        </div>
        <div>
          <FieldLabel required>Primary Product Category</FieldLabel>
          <Select {...register("primaryProductCategory")}>
            <option value="">Select</option>
            {sponsorProductCategoryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.primaryProductCategory ? (
            <FieldHint tone="error">
              {errors.primaryProductCategory.message}
            </FieldHint>
          ) : null}
        </div>
      </div>

      {showCompanyTypeOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("companyTypeOther")} />
        </div>
      ) : null}

      {showProductOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("primaryProductCategoryOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel required>Your Target Customer Profile</FieldLabel>
        <Select {...register("targetCustomerProfile")}>
          <option value="">Select</option>
          {sponsorTargetCustomerProfileOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.targetCustomerProfile ? (
          <FieldHint tone="error">
            {errors.targetCustomerProfile.message}
          </FieldHint>
        ) : null}
      </div>

      {showTargetProfileOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("targetCustomerProfileOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel>
          If targeting specific industries, which ones? (optional)
        </FieldLabel>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {sponsorTargetIndustryOptions.map((o) => (
            <CheckboxItem
              key={o}
              label={o}
              checked={(form.getValues("targetIndustries") ?? []).includes(o)}
              onChange={(e) => {
                const next = new Set(form.getValues("targetIndustries") ?? []);
                if (e.target.checked) next.add(o);
                else next.delete(o);
                setValue("targetIndustries", Array.from(next), {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>Company Size (Headcount)</FieldLabel>
          <Select {...register("companySize")}>
            <option value="">Select</option>
            {sponsorCompanySizeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.companySize ? (
            <FieldHint tone="error">{errors.companySize.message}</FieldHint>
          ) : null}
        </div>
        <div>
          <FieldLabel required>Geographic Presence in India</FieldLabel>
          <Select {...register("geographicPresence")}>
            <option value="">Select</option>
            {sponsorGeographicPresenceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.geographicPresence ? (
            <FieldHint tone="error">
              {errors.geographicPresence.message}
            </FieldHint>
          ) : null}
        </div>
      </div>

      <div>
        <FieldLabel required>Sponsorship Interest</FieldLabel>
        <Select {...register("sponsorshipInterest")}>
          <option value="">Select sponsorship tier</option>
          {sponsorshipInterestOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.sponsorshipInterest ? (
          <FieldHint tone="error">
            {errors.sponsorshipInterest.message}
          </FieldHint>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>Budget Approval Authority</FieldLabel>
          <Select {...register("budgetAuthority")}>
            <option value="">Select</option>
            {budgetAuthorityOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.budgetAuthority ? (
            <FieldHint tone="error">{errors.budgetAuthority.message}</FieldHint>
          ) : null}
        </div>
        <div>
          <FieldLabel required>Timeline for Decision</FieldLabel>
          <Select {...register("decisionTimeline")}>
            <option value="">Select</option>
            {decisionTimelineOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.decisionTimeline ? (
            <FieldHint tone="error">
              {errors.decisionTimeline.message}
            </FieldHint>
          ) : null}
        </div>
      </div>

      <div>
        <FieldLabel required>
          What’s your primary goal for sponsoring? (select all that apply)
        </FieldLabel>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {sponsorPrimaryGoalsOptions.map((o) => (
            <CheckboxItem
              key={o}
              label={o}
              checked={(form.getValues("primaryGoals") ?? []).includes(o)}
              onChange={(e) => {
                const next = new Set(form.getValues("primaryGoals") ?? []);
                if (e.target.checked) next.add(o);
                else next.delete(o);
                setValue("primaryGoals", Array.from(next), {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
          ))}
        </div>
        {errors.primaryGoals ? (
          <FieldHint tone="error">{errors.primaryGoals.message}</FieldHint>
        ) : null}
      </div>

      {showPrimaryGoalsOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("primaryGoalsOther")} />
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>
            Have you sponsored enterprise tech events before?
          </FieldLabel>
          <Select {...register("sponsoredBefore")}>
            <option value="">Select</option>
            {sponsoredBeforeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.sponsoredBefore ? (
            <FieldHint tone="error">{errors.sponsoredBefore.message}</FieldHint>
          ) : null}
        </div>
        <div>
          <FieldLabel required>
            What’s the most important factor in your sponsorship decision?
          </FieldLabel>
          <Select {...register("decisionFactor")}>
            <option value="">Select</option>
            {sponsorshipDecisionFactorOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.decisionFactor ? (
            <FieldHint tone="error">{errors.decisionFactor.message}</FieldHint>
          ) : null}
        </div>
      </div>

      {showDecisionFactorOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("decisionFactorOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel>Any specific questions or requests? (optional)</FieldLabel>
        <TextArea
          placeholder="E.g., “Can we get a sample intelligence report?” or “Is our category still available?”"
          maxLength={1000}
          {...register("questions")}
        />
      </div>

      <div>
        <FieldLabel>How did you hear about VertexGrid? (optional)</FieldLabel>
        <Select {...register("heardAbout")}>
          <option value="">Select</option>
          {heardAboutSponsorOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
      </div>

      {showHeardOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("heardAboutOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel>Referred by (if applicable)</FieldLabel>
        <TextInput {...register("referredBy")} />
      </div>

      <div className="pt-1">
        <div className="sr-only">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" {...register("website")} />
          </label>
        </div>

        <CheckboxItem
          label={
            <>
              I agree to the{" "}
              <a
                className="text-blue-600 underline"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-blue-600 underline"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              , and consent to being contacted about sponsorship opportunities.
            </>
          }
          {...register("agree")}
        />
        {errors.agree ? (
          <FieldHint tone="error">{errors.agree.message}</FieldHint>
        ) : null}
      </div>

      {submitError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}

      <SubmitBar>
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={cn(
            "h-14 w-full rounded-xl text-white",
            isValid
              ? "bg-[#0B1B4A] hover:bg-[#0B1B4A]/90 active:bg-[#0B1B4A]/85"
              : "bg-blue-300/70 hover:bg-blue-300/70 active:bg-blue-300/70",
            isSubmitting && "opacity-80"
          )}
        >
          {isSubmitting ? "Submitting…" : "Request Sponsorship Package"}
        </Button>
      </SubmitBar>
    </form>
  );
}
