import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { Button } from "../../components/ui/Button";
import { cn } from "../../lib/cn";
import {
  computeExecutiveDerived,
  executiveSchema,
  type ExecutiveFormValues,
} from "./executiveSchema";
import { submitToEndpoint } from "./formSubmit";
import {
  aiDeploymentStageOptions,
  deployedAiBeforeOptions,
  executiveCompanySizeOptions,
  executiveRoleOptions,
  heardAboutExecOptions,
  industryOptions,
  locationOptions,
  phoneCountryCodes,
} from "./options";
import {
  CheckboxItem,
  FieldHint,
  FieldLabel,
  RadioItem,
  RadioRow,
  Select,
  SubmitBar,
  TextArea,
  TextInput,
} from "./fields";

const EXEC_ENDPOINT = import.meta.env.VITE_EXECUTIVE_FORM_ENDPOINT as
  | string
  | undefined;

function isOther(value: string) {
  return value.toLowerCase().includes("other");
}

export function ExecutiveApplicationForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
}) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ExecutiveFormValues>({
    resolver: zodResolver(executiveSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      phoneCountryCode: "+91",
      agree: false,
      website: "",
    },
  });

  const aiChallenge =
    useWatch({ control: form.control, name: "aiAdoptionChallenge" }) ?? "";
  const aiStage =
    useWatch({ control: form.control, name: "aiDeploymentStage" }) ?? "";
  const currentRole =
    useWatch({ control: form.control, name: "currentRole" }) ?? "";
  const industry = useWatch({ control: form.control, name: "industry" }) ?? "";
  const location =
    useWatch({ control: form.control, name: "companyLocation" }) ?? "";
  const heardAbout =
    useWatch({ control: form.control, name: "heardAbout" }) ?? "";
  const panelSpeakerInterest =
    useWatch({ control: form.control, name: "panelSpeakerInterest" }) ?? "";

  const shouldShowRoleOther = useMemo(
    () => isOther(currentRole),
    [currentRole]
  );
  const shouldShowIndustryOther = useMemo(() => isOther(industry), [industry]);
  const shouldShowLocationOther = useMemo(() => isOther(location), [location]);
  const shouldShowHeardOther = useMemo(() => isOther(heardAbout), [heardAbout]);

  async function onSubmit(values: ExecutiveFormValues) {
    setSubmitError(null);

    // honeypot: bots fill it, humans shouldn't
    if (values.website) {
      setSubmitted(true);
      onSubmitted?.();
      return;
    }

    const derived = computeExecutiveDerived(values);

    const payload = {
      // Formspree helpers (improve inbox UX)
      _subject: "Executive Application - VertexGrid Exchange - AI Edition",
      _replyto: values.email,
      _gotcha: values.website,
      formType: "executive",
      submittedAt: new Date().toISOString(),
      ...values,
      ...derived,
      // normalize "other" fields if not used
      currentRoleOther: shouldShowRoleOther ? values.currentRoleOther : "",
      industryOther: shouldShowIndustryOther ? values.industryOther : "",
      companyLocationOther: shouldShowLocationOther
        ? values.companyLocationOther
        : "",
      heardAboutOther: shouldShowHeardOther ? values.heardAboutOther : "",
    };

    const res = await submitToEndpoint(EXEC_ENDPOINT, payload);
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
            We’ll review your application and respond within 48 hours. If
            approved, you’ll receive a calendar invite and pre-event survey.
          </p>
        </div>
      </div>
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-sm text-zinc-600">
        We’re curating 50 CIOs/CTOs for a closed-door session on Enterprise AI
        Adoption. Complete this form and we’ll review your application within 48
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
        <FieldLabel required>LinkedIn Profile URL</FieldLabel>
        <TextInput
          placeholder="https://linkedin.com/in/yourprofile"
          {...register("linkedinUrl")}
        />
        {errors.linkedinUrl ? (
          <FieldHint tone="error">{errors.linkedinUrl.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel>
          Are you interested in becoming a panel Speaker with us?
        </FieldLabel>
        <RadioRow>
          <RadioItem
            label="Yes"
            checked={panelSpeakerInterest === "Yes"}
            value="Yes"
            {...register("panelSpeakerInterest")}
          />
          <RadioItem
            label="No"
            checked={panelSpeakerInterest === "No"}
            value="No"
            {...register("panelSpeakerInterest")}
          />
        </RadioRow>
      </div>

      <div>
        <FieldLabel required>Current Role</FieldLabel>
        <Select {...register("currentRole")}>
          <option value="">Select role</option>
          {executiveRoleOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.currentRole ? (
          <FieldHint tone="error">{errors.currentRole.message}</FieldHint>
        ) : null}
      </div>

      {shouldShowRoleOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("currentRoleOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel required>Company Name</FieldLabel>
        <TextInput autoComplete="organization" {...register("companyName")} />
        {errors.companyName ? (
          <FieldHint tone="error">{errors.companyName.message}</FieldHint>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel required>Company Size</FieldLabel>
          <Select {...register("companySize")}>
            <option value="">Select company size</option>
            {executiveCompanySizeOptions.map((o) => (
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
          <FieldLabel required>Industry</FieldLabel>
          <Select {...register("industry")}>
            <option value="">Select your industry</option>
            {industryOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
          {errors.industry ? (
            <FieldHint tone="error">{errors.industry.message}</FieldHint>
          ) : null}
        </div>
      </div>

      {shouldShowIndustryOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("industryOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel required>Company Location</FieldLabel>
        <Select {...register("companyLocation")}>
          <option value="">Select location</option>
          {locationOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.companyLocation ? (
          <FieldHint tone="error">{errors.companyLocation.message}</FieldHint>
        ) : null}
      </div>

      {shouldShowLocationOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("companyLocationOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel required>AI Deployment Stage</FieldLabel>
        <Select {...register("aiDeploymentStage")}>
          <option value="">Select stage</option>
          {aiDeploymentStageOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.aiDeploymentStage ? (
          <FieldHint tone="error">{errors.aiDeploymentStage.message}</FieldHint>
        ) : null}

        {aiStage === "Not currently deploying AI" ? (
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
            This event is for practitioners with active AI deployments. We’ll
            keep you updated on future events that might be more relevant.
          </div>
        ) : null}
      </div>

      <div>
        <FieldLabel required>
          What’s your 1 AI adoption challenge right now?
        </FieldLabel>
        <TextArea
          placeholder="Be specific — e.g., “Our model works in dev but latency kills it in production” or “Finance won’t approve rollout without clear ROI metrics”"
          maxLength={200}
          {...register("aiAdoptionChallenge")}
        />
        <div className="mt-1 flex items-center justify-between">
          {errors.aiAdoptionChallenge ? (
            <FieldHint tone="error">
              {errors.aiAdoptionChallenge.message}
            </FieldHint>
          ) : (
            <div />
          )}
          <div
            className={cn(
              "text-xs",
              aiChallenge.length > 200 ? "text-red-500" : "text-zinc-500"
            )}
          >
            {aiChallenge.length}/200
          </div>
        </div>
      </div>

      <div>
        <FieldLabel required>
          Have you deployed AI in production before?
        </FieldLabel>
        <Select {...register("deployedAiBefore")}>
          <option value="">Select</option>
          {deployedAiBeforeOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
        {errors.deployedAiBefore ? (
          <FieldHint tone="error">{errors.deployedAiBefore.message}</FieldHint>
        ) : null}
      </div>

      <div>
        <FieldLabel>How did you hear about VertexGrid? (optional)</FieldLabel>
        <Select {...register("heardAbout")}>
          <option value="">Select</option>
          {heardAboutExecOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </Select>
      </div>

      {shouldShowHeardOther ? (
        <div>
          <FieldLabel>Other (please specify)</FieldLabel>
          <TextInput {...register("heardAboutOther")} />
        </div>
      ) : null}

      <div>
        <FieldLabel>Referred by (if applicable)</FieldLabel>
        <TextInput
          placeholder="Name of person who referred you"
          {...register("referredBy")}
        />
      </div>

      <div>
        <FieldLabel>
          Any dietary restrictions or accessibility needs? (optional)
        </FieldLabel>
        <TextInput {...register("dietaryNeeds")} />
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
              , and consent to being contacted about VertexGrid events.
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
          disabled={!form.formState.isValid || isSubmitting}
          className={cn(
            "h-14 w-full rounded-xl text-white",
            form.formState.isValid
              ? "bg-[#0B1B4A] hover:bg-[#0B1B4A]/90 active:bg-[#0B1B4A]/85"
              : "bg-blue-300/70 hover:bg-blue-300/70 active:bg-blue-300/70",
            isSubmitting && "opacity-80"
          )}
        >
          {isSubmitting ? "Submitting…" : "Submit Application"}
        </Button>
      </SubmitBar>
    </form>
  );
}
