# VertexGrid (Landing Page)

Single-page landing site built with **React + TypeScript + Vite + Tailwind**.

## Forms (no backend)

The site includes **two modal forms** implemented with **React Hook Form** (validated via Zod):

- **Executive Application** (per the provided PDF)
- **Sponsor Inquiry** (per the provided PDF)

## Send submissions to your mailbox (recommended)

Because you want **no backend**, use a form-to-email provider such as **Formspree** (or Basin/Getform).

### Formspree: create 2 forms (step-by-step)

- **1) Create account**: Sign up/login to Formspree.
- **2) Create Executive form**:
  - Click **New Form**
  - Name it something like **VertexGrid – Executive Application**
  - Set **Recipient email** (your mailbox)
  - Copy the endpoint URL: `https://formspree.io/f/<id>`
- **3) Create Sponsor form**:
  - Click **New Form**
  - Name it something like **VertexGrid – Sponsor Inquiry**
  - Set **Recipient email**
  - Copy its endpoint URL
- **4) (Recommended) Turn on spam protection**:
  - Enable **reCAPTCHA / spam filtering** (Formspree settings)
  - Add rate limits if available on your plan
- **5) (Optional) Autoresponder**:
  - Configure an auto-reply confirmation email for each form

### Setup

- Create **2 forms** in your provider dashboard (Executive + Sponsor).
- Copy each form endpoint URL.
- Create a local `.env` file from `.env.example`:

```bash
cp .env.example .env
```

- Fill in:
  - `VITE_EXECUTIVE_FORM_ENDPOINT`
  - `VITE_SPONSOR_FORM_ENDPOINT`

### Run locally

```bash
npm run dev
```

## Notes / best practices

- **Avoid client-side email APIs** (e.g. EmailJS) for production—public keys can be abused. Form providers offer better spam protection (rate limits, reCAPTCHA, blocking).
- **Sponsor lead priority**: sponsor submissions include a `leadPriority` field (`URGENT | NORMAL | LOW`) based on the PDF rules so you can filter/label emails easily.
