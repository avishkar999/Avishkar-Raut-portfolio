import { SERVICES_CONTENT } from '../data/portfolio';
import { FadeIn } from './FadeIn';

/**
 * Light Services section with three clean numbered cards and internship availability note.
 */
export function Services() {
  return (
    <section id="services" className="bg-white py-16 text-[#1E293B] sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 h-0.5 w-8 bg-[#F59E0B]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              {SERVICES_CONTENT.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SERVICES_CONTENT.items.map((service) => (
              <div
                key={service.number}
                className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7"
              >
                <span className="text-sm font-semibold text-[#B45309] tabular-nums">
                  {service.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0F172A]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-relaxed text-[#1E293B] sm:text-base">
            {SERVICES_CONTENT.availability}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
