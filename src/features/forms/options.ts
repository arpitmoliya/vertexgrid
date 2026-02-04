export const phoneCountryCodes = [
  { label: "India (+91)", value: "+91" },
  { label: "United States (+1)", value: "+1" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "Singapore (+65)", value: "+65" },
  { label: "UAE (+971)", value: "+971" },
  { label: "Other (+)", value: "+" },
] as const;

export const executiveRoleOptions = [
  "Chief Information Officer (CIO)",
  "Chief Technology Officer (CTO)",
  "Chief Data Officer (CDO)",
  "VP Engineering",
  "VP Data & Analytics",
  "Head of AI/ML",
  "Head of Technology",
  "Head of Data",
  "Other (please specify)",
] as const;

export const executiveCompanySizeOptions = [
  "200-500 employees",
  "500-1,000 employees",
  "1,000-3,000 employees",
  "3,000-5,000 employees",
  "5,000-10,000 employees",
  "10,000+ employees",
] as const;

export const industryOptions = [
  "Financial Services / Fintech",
  "Retail / E-commerce",
  "Technology / SaaS",
  "Healthcare / Pharma",
  "Manufacturing / Industrial",
  "Media / Entertainment",
  "Logistics / Supply Chain",
  "Education / EdTech",
  "Consulting / Professional Services",
  "Government / Public Sector",
  "Other (please specify)",
] as const;

export const locationOptions = [
  "Bangalore",
  "Mumbai",
  "Delhi / NCR",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Other Indian city (please specify)",
  "International",
] as const;

export const aiDeploymentStageOptions = [
  "Planning phase (evaluating options, building business case)",
  "Pilot phase (1-3 projects in testing)",
  "Early production (1-2 AI use cases live in production)",
  "Scaled production (3+ AI use cases live)",
  "AI-native operations (core business runs on AI)",
  "Not currently deploying AI",
] as const;

export const deployedAiBeforeOptions = [
  "Yes, successfully (still running)",
  "Yes, but project failed or was shut down",
  "Currently in pilot, not yet in production",
  "No, still in planning/research phase",
] as const;

export const heardAboutExecOptions = [
  "LinkedIn post",
  "Email invitation",
  "Referral from colleague",
  "Referral from sponsor/vendor",
  "News article / media",
  "Search engine",
  "Other (please specify)",
] as const;

export const sponsorCompanyTypeOptions = [
  "Cloud Infrastructure Provider",
  "AI/ML Platform Provider",
  "Data Infrastructure / Data Warehouse",
  "Enterprise SaaS (CRM, ERP, etc.)",
  "System Integrator / Consulting Firm",
  "Security Platform",
  "DevOps / Platform Engineering Tools",
  "Analytics / Business Intelligence",
  "Other Technology Vendor (please specify)",
  "Media / Research Firm",
  "Other (please specify)",
] as const;

export const sponsorProductCategoryOptions = [
  "Cloud Infrastructure (AWS, Azure, GCP, Oracle, IBM)",
  "AI/ML Platforms (Databricks, Dataiku, DataRobot, etc.)",
  "Data Infrastructure (Snowflake, MongoDB, Confluent, etc.)",
  "Enterprise SaaS (Salesforce, SAP, ServiceNow, etc.)",
  "System Integration / Consulting Services",
  "Security (CrowdStrike, Palo Alto, Zscaler, etc.)",
  "DevOps / Platform Engineering (GitLab, HashiCorp, etc.)",
  "Analytics / BI (Tableau, Power BI, Looker, etc.)",
  "Other (please specify)",
] as const;

export const sponsorTargetCustomerProfileOptions = [
  "Enterprise CIOs/CTOs (our audience)",
  "Mid-market technology leaders",
  "Specific industries (will specify below)",
  "Other (please specify)",
] as const;

export const sponsorTargetIndustryOptions = [
  "Financial Services / Fintech",
  "Retail / E-commerce",
  "Healthcare / Pharma",
  "Manufacturing / Industrial",
  "Technology / SaaS",
  "All industries",
] as const;

export const sponsorCompanySizeOptions = [
  "1-50 employees (Startup)",
  "51-200 employees (Small)",
  "201-1,000 employees (Mid-size)",
  "1,000-5,000 employees (Large)",
  "5,000+ employees (Enterprise)",
] as const;

export const sponsorGeographicPresenceOptions = [
  "India headquarters",
  "India regional office",
  "Entering India market (no office yet)",
  "International only (exploring India)",
] as const;

export const sponsorshipInterestOptions = [
  "Founding Sponsor (₹9L - Full event access + intelligence)",
  "Intelligence Partner (₹6L - Intelligence report + event attendance)",
  "Multi-event package (3 events)",
  "Full year package (5 events)",
  "Just gathering information",
  "Not sure yet / want to discuss",
] as const;

export const budgetAuthorityOptions = [
  "I have full budget authority",
  "I influence the decision (need manager approval)",
  "I’m researching for decision-maker",
  "Just exploring options",
] as const;

export const decisionTimelineOptions = [
  "Ready to move forward this week",
  "Need 1-2 weeks to review internally",
  "Need 2-4 weeks (legal review, approvals)",
  "Just gathering information for future",
  "Not sure yet",
] as const;

export const sponsorPrimaryGoalsOptions = [
  "Access to proprietary market intelligence",
  "Direct access to CIO/CTO decision-makers",
  "Category-exclusive positioning",
  "Understanding customer pain points",
  "Product roadmap validation",
  "Lead generation",
  "Brand awareness",
  "Other (please specify)",
] as const;

export const sponsoredBeforeOptions = [
  "Yes, regularly (multiple events per year)",
  "Yes, occasionally (1-2 events per year)",
  "No, this would be our first",
  "Not sure",
] as const;

export const sponsorshipDecisionFactorOptions = [
  "Quality of intelligence report",
  "Direct access to executives",
  "Category exclusivity",
  "Price / ROI",
  "Event format and experience",
  "Other (please specify)",
] as const;

export const heardAboutSponsorOptions = [
  "LinkedIn outreach",
  "Email outreach",
  "Referral from colleague",
  "Referral from customer/partner",
  "News article / media",
  "Search engine",
  "Other (please specify)",
] as const;
