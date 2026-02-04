export type FormSubmitResult = { ok: true } | { ok: false; message: string };

async function safeReadText(res: Response) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}

export async function submitToEndpoint(
  endpoint: string | undefined,
  payload: unknown
): Promise<FormSubmitResult> {
  if (!endpoint) {
    return {
      ok: false,
      message:
        "Form endpoint is not configured. Please set the VITE_* form endpoint in your environment.",
    };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await safeReadText(res);
      return {
        ok: false,
        message:
          body.trim() ||
          `Submission failed with status ${res.status}. Please try again.`,
      };
    }

    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      message:
        e instanceof Error
          ? e.message
          : "Network error submitting form. Please try again.",
    };
  }
}
