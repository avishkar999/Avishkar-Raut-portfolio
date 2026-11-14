import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { CASE_STUDIES, type CaseStudy } from '../data/portfolio';
import { getVisibleCaseStudies } from '../utils/caseStudies';
import { FadeIn } from './FadeIn';

/**
 * Dark navy Work / Case Studies section in Problem, Approach, Result format.
 * Clicking a card opens an accessible detail modal. Hidden case studies are omitted.
 */
export function Work() {
  const visibleStudies = getVisibleCaseStudies(CASE_STUDIES);
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeStudy) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveStudy(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeStudy]);

  if (visibleStudies.length === 0) {
    return null;
  }

  return (
    <section id="work" className="bg-[#0F172A] py-16 text-[#E2E8F0] sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn>
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 h-0.5 w-8 bg-[#F59E0B]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Selected Work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {visibleStudies.map((study) => (
              <article
                key={study.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#162033] p-6 transition-colors duration-150 hover:border-slate-700 sm:p-8"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{study.subtitle}</p>

                  <dl className="mt-6 space-y-4 border-t border-slate-800 pt-5 text-sm leading-relaxed">
                    <div>
                      <dt className="font-semibold text-[#F59E0B]">Problem</dt>
                      <dd className="mt-1 text-[#E2E8F0]">{study.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#F59E0B]">Approach</dt>
                      <dd className="mt-1 text-[#E2E8F0]">{study.approach}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[#F59E0B]">Result</dt>
                      <dd className="mt-1 font-medium text-white">{study.result}</dd>
                    </div>
                  </dl>

                  {study.featuredPosts && study.featuredPosts.length > 0 && (
                    <div className="mt-5 border-t border-slate-800 pt-4">
                      <p className="text-xs font-semibold text-slate-300">Selected posts</p>
                      <ul className="mt-2 space-y-1.5">
                        {study.featuredPosts.map((post) => (
                          <li key={post.url}>
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-[#E2E8F0] underline decoration-slate-600 underline-offset-4 transition-colors hover:text-[#F59E0B] hover:decoration-[#F59E0B]"
                            >
                              <span>{post.title}</span>
                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-800/80 pt-5">
                  <button
                    type="button"
                    onClick={(event) => {
                      triggerRef.current = event.currentTarget;
                      setActiveStudy(study);
                    }}
                    className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap rounded-md border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {study.externalLink && (
                    <a
                      href={study.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap text-sm font-medium text-[#F59E0B] transition-colors hover:text-[#FBBF24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
                    >
                      <span>{study.externalLink.label}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Case Study Detail Modal */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
          onClick={() => setActiveStudy(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${activeStudy.id}`}
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-xl border border-slate-700 bg-[#0F172A] p-6 text-[#E2E8F0] shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id={`modal-title-${activeStudy.id}`}
                  className="text-xl font-semibold tracking-tight text-white sm:text-2xl"
                >
                  {activeStudy.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{activeStudy.subtitle}</p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveStudy(null)}
                aria-label={`Close ${activeStudy.title} details`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-700 text-slate-300 transition-colors hover:border-[#F59E0B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <dl className="mt-6 space-y-4 border-t border-slate-800 pt-5 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-[#F59E0B]">Problem</dt>
                <dd className="mt-1 text-[#E2E8F0]">{activeStudy.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#F59E0B]">Approach</dt>
                <dd className="mt-1 text-[#E2E8F0]">{activeStudy.approach}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#F59E0B]">Result</dt>
                <dd className="mt-1 font-medium text-white">{activeStudy.result}</dd>
              </div>
            </dl>

            {activeStudy.details.length > 0 && (
              <div className="mt-6 border-t border-slate-800 pt-5">
                <h4 className="text-sm font-semibold text-white">Highlights</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#E2E8F0]">
                  {activeStudy.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeStudy.featuredPosts && activeStudy.featuredPosts.length > 0 && (
              <div className="mt-6 border-t border-slate-800 pt-5">
                <h4 className="text-sm font-semibold text-white">Featured posts</h4>
                <ul className="mt-3 space-y-2">
                  {activeStudy.featuredPosts.map((post) => (
                    <li key={post.url}>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#F59E0B] underline underline-offset-4 hover:text-[#FBBF24]"
                      >
                        <span>{post.title}</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-5">
              {activeStudy.externalLink ? (
                <a
                  href={activeStudy.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 whitespace-nowrap rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
                >
                  <span>{activeStudy.externalLink.label}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={() => setActiveStudy(null)}
                className="inline-flex min-h-[42px] items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
