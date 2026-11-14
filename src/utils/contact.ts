export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates contact form fields and returns per-field error messages.
 */
export function validateContactForm(values: ContactFormValues): ContactValidationErrors {
  const errors: ContactValidationErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a short message about your project or role.';
  }

  return errors;
}

/**
 * Builds a properly URL-encoded mailto link for the portfolio owner.
 */
export function buildMailtoUrl(recipientEmail: string, values: ContactFormValues): string {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  const subject = `Portfolio inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const params = new URLSearchParams({
    subject,
    body,
  });

  // URLSearchParams encodes spaces as '+', while mailto clients expect '%20'.
  const encodedQuery = params.toString().replace(/\+/g, '%20');
  return `mailto:${recipientEmail}?${encodedQuery}`;
}
