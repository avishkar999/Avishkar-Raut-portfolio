import { ArrowUp } from 'lucide-react';
import { FOOTER_CONTENT, SITE_META } from '../data/portfolio';

/**
 * Minimal footer with copyright, profile links, and back-to-top anchor.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
        <p>{FOOTER_CONTENT.copyright}</p>

        <div className="flex items-center gap-6">
          <a
            href={SITE_META.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center whitespace-nowrap transition-colors hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
          >
            LinkedIn
          </a>
          <a
            href={SITE_META.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center whitespace-nowrap transition-colors hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap font-medium text-slate-300 transition-colors hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
          >
            <span>{FOOTER_CONTENT.backToTop}</span>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
