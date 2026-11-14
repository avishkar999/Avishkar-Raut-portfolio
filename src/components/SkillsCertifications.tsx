import { SKILLS_AND_CERTS } from '../data/portfolio';
import { FadeIn } from './FadeIn';

/**
 * Light two-column section presenting Skills and Certifications cleanly without pill clutter.
 */
export function SkillsCertifications() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-[#F8FAFC] py-16 text-[#1E293B] sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="mb-10">
            <div className="mb-3 h-0.5 w-8 bg-[#F59E0B]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              {SKILLS_AND_CERTS.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="border-b border-slate-200 pb-3 text-base font-semibold text-[#0F172A]">
                Skills
              </h3>
              <ul className="divide-y divide-slate-200/80">
                {SKILLS_AND_CERTS.skills.map((skill) => (
                  <li key={skill} className="py-3.5 text-sm font-medium text-[#1E293B] sm:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="border-b border-slate-200 pb-3 text-base font-semibold text-[#0F172A]">
                Certifications
              </h3>
              <ul className="divide-y divide-slate-200/80">
                {SKILLS_AND_CERTS.certifications.map((cert) => (
                  <li key={cert} className="py-3.5 text-sm font-medium text-[#1E293B] sm:text-base">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
