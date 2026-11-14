import { PROOF_STATS } from '../data/portfolio';
import { FadeIn } from './FadeIn';

/**
 * Light proof strip presenting three concise, organic reach and consistency metrics.
 */
export function ProofStrip() {
  return (
    <section
      aria-label="Key milestones"
      className="border-b border-slate-200 bg-white py-10 text-[#1E293B] sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeIn immediate>
          <dl className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {PROOF_STATS.map((stat, index) => (
              <div
                key={stat.value}
                className={`py-4 sm:py-1 ${
                  index === 0
                    ? 'sm:pr-8'
                    : index === 1
                      ? 'sm:px-8'
                      : 'sm:pl-8'
                }`}
              >
                <dt className="text-2xl font-bold tracking-tight text-[#0F172A] tabular-nums sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-slate-600">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
