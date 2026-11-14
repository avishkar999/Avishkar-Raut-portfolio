import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT, SITE_META } from '../data/portfolio';

/**
 * Hero section on deep navy canvas.
 * Mobile: headshot sits above text for immediate 5-second recognition.
 * Desktop: 2-column split with copy on the left and headshot on the right.
 */
export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="top"
      className="bg-[#0F172A] py-14 text-[#E2E8F0] sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Headshot frame: first on mobile, right column on desktop */}
        <div className="order-1 flex justify-start lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="w-52 overflow-hidden rounded-xl border border-slate-700/80 bg-[#162033] shadow-xl shadow-black/30 ring-1 ring-white/10 sm:w-64 lg:w-full lg:max-w-[340px]">
            {!imageError ? (
              <img
                src={SITE_META.headshotSrc}
                alt={SITE_META.headshotAlt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            ) : (
              <div
                aria-label={SITE_META.headshotAlt}
                className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-slate-800/90 p-6 text-center"
              >
                <span className="text-3xl font-bold tracking-tight text-[#F59E0B]">AR</span>
                <span className="mt-2 text-xs font-medium text-slate-300">{SITE_META.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* Copy & CTAs: second on mobile, left column on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          {/* Small amber accent line above headline */}
          <div className="mb-5 h-0.5 w-12 bg-[#F59E0B]" aria-hidden="true" />

          <h1 className="max-w-2xl text-[clamp(2.15rem,4.5vw,3.5rem)] font-bold leading-[1.12] tracking-tight text-white [text-wrap:balance]">
            {HERO_CONTENT.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#E2E8F0] sm:text-lg">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#work"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={SITE_META.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-md border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#F59E0B] hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              <span>{HERO_CONTENT.secondaryCta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-7 border-t border-slate-800 pt-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            {HERO_CONTENT.credentials}
          </p>
        </div>
      </div>
    </section>
  );
}
