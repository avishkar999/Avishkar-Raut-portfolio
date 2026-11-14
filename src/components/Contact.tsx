import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { CONTACT_CONTENT, SITE_META } from '../data/portfolio';
import {
  buildMailtoUrl,
  validateContactForm,
  type ContactFormValues,
  type ContactValidationErrors,
} from '../utils/contact';
import { FadeIn } from './FadeIn';

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  message: '',
};

/**
 * Dark navy Contact section with validated mailto form, LinkedIn link, and direct email action.
 */
export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [generatedMailto, setGeneratedMailto] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setGeneratedMailto(null);
      return;
    }

    setErrors({});
    const mailtoUrl = buildMailtoUrl(SITE_META.email, values);
    setGeneratedMailto(mailtoUrl);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="bg-[#0F172A] py-16 text-[#E2E8F0] sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left column: Headline and direct links */}
            <div className="lg:col-span-5">
              <div className="mb-3 h-0.5 w-8 bg-[#F59E0B]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {CONTACT_CONTENT.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#E2E8F0]">
                {CONTACT_CONTENT.subline}
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={SITE_META.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={SITE_META.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${SITE_META.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{SITE_META.email}</span>
                </a>
              </div>
            </div>

            {/* Right column: Mailto contact form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-slate-800 bg-[#162033] p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, name: event.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Your name"
                      className="mt-2 block min-h-[44px] w-full rounded-md border border-slate-700 bg-[#0F172A] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#F59E0B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/40"
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="mt-1.5 text-xs text-[#FBBF24]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, email: event.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="you@company.com"
                      className="mt-2 block min-h-[44px] w-full rounded-md border border-slate-700 bg-[#0F172A] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#F59E0B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/40"
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="mt-1.5 text-xs text-[#FBBF24]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, message: event.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Share a short note about your project, role, or timeline."
                      className="mt-2 block w-full rounded-md border border-slate-700 bg-[#0F172A] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-[#F59E0B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]/40"
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="mt-1.5 text-xs text-[#FBBF24]">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                  >
                    Send message
                  </button>
                </div>

                {generatedMailto && (
                  <div
                    role="status"
                    className="mt-5 rounded-md border border-slate-700 bg-[#0F172A] p-4 text-sm text-[#E2E8F0]"
                  >
                    <p>
                      Your email app should open with a draft to{' '}
                      <span className="font-medium text-white">{SITE_META.email}</span>.
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-4">
                      <a
                        href={generatedMailto}
                        className="font-semibold text-[#F59E0B] underline underline-offset-4 hover:text-[#FBBF24]"
                      >
                        Open email draft
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setValues(INITIAL_VALUES);
                          setGeneratedMailto(null);
                        }}
                        className="text-slate-400 underline underline-offset-4 hover:text-white"
                      >
                        Reset form
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
