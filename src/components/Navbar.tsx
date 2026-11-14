import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_META } from '../data/portfolio';

/**
 * Sticky 3-zone top navigation bar with responsive mobile menu.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0F172A]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap text-base font-semibold tracking-tight text-white transition-colors hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
        >
          {SITE_META.name}
        </a>

        {/* Zone 2: Desktop navigation links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium text-[#E2E8F0] transition-colors duration-150 hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F59E0B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Mobile menu toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden shrink-0 whitespace-nowrap rounded-md bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] md:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#E2E8F0] transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Collapsible mobile menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-800 bg-[#0F172A] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#E2E8F0] transition-colors hover:bg-slate-800/70 hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#F59E0B] px-4 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
