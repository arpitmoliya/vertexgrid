import { z } from "zod";

export const executiveSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  email: z.string().trim().email("Please enter a valid email address."),
  phoneCountryCode: z.string().trim().min(1, "Country code is required."),
  phoneNumber: z
    .string()
    .trim()
    .min(6, "Phone number is required.")
    .max(20, "Phone number is too long.")
    .refine((v) => /^[0-9+\-() ]+$/.test(v), {
      message: "Phone number contains invalid characters.",
    }),
  linkedinUrl: z
    .string()
    .trim()
    .min(1, "LinkedIn profile URL is required.")
    .refine((v) => /^https?:\/\//i.test(v), {
      message:
        "Please enter a valid URL (must start with http:// or https://).",
    }),
  currentRole: z.string().trim().min(1, "Please select your current role."),
  currentRoleOther: z.string().trim().optional().or(z.literal("")),
  companyName: z.string().trim().min(1, "Company name is required."),
  companySize: z.string().trim().min(1, "Please select company size."),
  industry: z.string().trim().min(1, "Please select an industry."),
  industryOther: z.string().trim().optional().or(z.literal("")),
  companyLocation: z.string().trim().min(1, "Please select a location."),
  companyLocationOther: z.string().trim().optional().or(z.literal("")),
  aiDeploymentStage: z
    .string()
    .trim()
    .min(1, "Please select an AI deployment stage."),
  aiAdoptionChallenge: z
    .string()
    .trim()
    .min(1, "Please describe your AI adoption challenge.")
    .max(200, "Must be 200 characters or less."),
  deployedAiBefore: z.string().trim().min(1, "Please select an option."),
  heardAbout: z.string().trim().optional().or(z.literal("")),
  heardAboutOther: z.string().trim().optional().or(z.literal("")),
  referredBy: z.string().trim().optional().or(z.literal("")),
  dietaryNeeds: z.string().trim().optional().or(z.literal("")),

  agree: z
    .boolean()
    .refine((v) => v === true, {
      message: "You must agree to the terms to proceed.",
    }),

  // spam trap (should stay empty)
  website: z.string().optional().or(z.literal("")),
});

export type ExecutiveFormValues = z.infer<typeof executiveSchema>;

export function computeExecutiveDerived(values: ExecutiveFormValues) {
  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const phone = `${values.phoneCountryCode} ${values.phoneNumber}`.trim();

  return { fullName, phone };
}
