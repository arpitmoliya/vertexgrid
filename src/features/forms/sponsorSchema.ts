import { z } from "zod";

const urlOptional = z
  .string()
  .trim()
  .optional()
  .or(z.literal(""))
  .refine((v) => !v || /^https?:\/\//i.test(v), {
    message: "Please enter a valid URL (must start with http:// or https://).",
  });

export const sponsorSchema = z.object({
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
  linkedinUrl: urlOptional,
  jobTitle: z.string().trim().min(1, "Job title is required."),
  companyName: z.string().trim().min(1, "Company name is required."),
  companyWebsite: z
    .string()
    .trim()
    .min(1, "Company website is required.")
    .refine((v) => /^https?:\/\//i.test(v), {
      message:
        "Please enter a valid URL (must start with http:// or https://).",
    }),

  companyType: z.string().trim().min(1, "Please select company type."),
  companyTypeOther: z.string().trim().optional().or(z.literal("")),
  primaryProductCategory: z
    .string()
    .trim()
    .min(1, "Please select a primary product category."),
  primaryProductCategoryOther: z.string().trim().optional().or(z.literal("")),
  targetCustomerProfile: z
    .string()
    .trim()
    .min(1, "Please select a target customer profile."),
  targetCustomerProfileOther: z.string().trim().optional().or(z.literal("")),

  targetIndustries: z.array(z.string()).optional().or(z.literal(undefined)),
  companySize: z.string().trim().min(1, "Please select company size."),
  geographicPresence: z
    .string()
    .trim()
    .min(1, "Please select geographic presence."),

  sponsorshipInterest: z
    .string()
    .trim()
    .min(1, "Please select sponsorship interest."),
  budgetAuthority: z
    .string()
    .trim()
    .min(1, "Please select budget approval authority."),
  decisionTimeline: z
    .string()
    .trim()
    .min(1, "Please select timeline for decision."),

  primaryGoals: z.array(z.string()).min(1, "Select at least one goal."),
  primaryGoalsOther: z.string().trim().optional().or(z.literal("")),

  sponsoredBefore: z.string().trim().min(1, "Please select an option."),
  decisionFactor: z
    .string()
    .trim()
    .min(1, "Please select the most important factor."),
  decisionFactorOther: z.string().trim().optional().or(z.literal("")),

  questions: z.string().trim().max(1000).optional().or(z.literal("")),
  heardAbout: z.string().trim().optional().or(z.literal("")),
  heardAboutOther: z.string().trim().optional().or(z.literal("")),
  referredBy: z.string().trim().optional().or(z.literal("")),

  agree: z
    .boolean()
    .refine((v) => v === true, {
      message: "You must agree to the terms to proceed.",
    }),

  website: z.string().optional().or(z.literal("")),
});

export type SponsorFormValues = z.infer<typeof sponsorSchema>;

export function computeSponsorDerived(values: SponsorFormValues) {
  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const phone = `${values.phoneCountryCode} ${values.phoneNumber}`.trim();

  const urgent =
    values.decisionTimeline === "Ready to move forward this week" &&
    values.budgetAuthority === "I have full budget authority";
  const deprioritize =
    values.sponsorshipInterest === "Just gathering information" &&
    values.decisionTimeline === "Not sure yet";

  const leadPriority = urgent ? "URGENT" : deprioritize ? "LOW" : "NORMAL";

  return { fullName, phone, leadPriority };
}
