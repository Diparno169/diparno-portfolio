// Contact form submission logic.
//
// This file is intentionally the ONLY place that talks to an email
// provider. Swap the inside of `sendContactMessage` for a real call to
// EmailJS, Nodemailer (via a Next.js route handler / Server Action), or
// Resend when you're ready to wire up real delivery — the form component
// never needs to change.
//
// IMPORTANT: never hardcode API keys or secrets here. Read them from
// environment variables (e.g. `process.env.RESEND_API_KEY`) on the server
// side only.

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
}

export async function sendContactMessage(
  values: ContactFormValues
): Promise<ContactSubmitResult> {
  const errors = validateContactForm(values);

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      error: "Please fix the highlighted fields.",
    };
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        ok: false,
        error: data.error || "Failed to send message.",
      };
    }

    return {
      ok: true,
    };
  } catch {
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
