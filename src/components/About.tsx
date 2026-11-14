import { ABOUT_CONTENT } from '../data/portfolio';
import { FadeIn } from './FadeIn';

/**
 * Light About section with three concise paragraphs and a clean learning focus list.
 */
export function About() {
  return (
    <section id="about" className="bg-[#F8FAFC] py-16 text-[#1E293B] sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="mb-3 h-0.5 w-8 bg-[#F59E0B]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
                {ABOUT_CONTENT.heading}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="max-w-[65ch] space-y-5 text-base leading-[1.7] text-[#1E293B]">
                {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h3 className="text-sm font-semibold text-[#0F172A]">
                  {ABOUT_CONTENT.learningHeading}
                </h3>
                <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#1E293B]">
                  {ABOUT_CONTENT.currentlyLearning.map((item, index) => (
                    <li key={item} className="inline-flex items-center gap-3">
                      <span className="font-medium text-[#0F172A]">{item}</span>
                      {index < ABOUT_CONTENT.currentlyLearning.length - 1 && (
                        <span className="text-slate-400" aria-hidden="true">
                          /
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
