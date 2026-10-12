"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection to toggle header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility (Escape key closes drawer)
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Auto close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-graphite-100 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide">
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-graphite-950 transition-colors focus-visible:outline-hidden"
            aria-label="Mentis AI Homepage"
          >
            <span
              className="h-2 w-2 bg-crimson-600 transition-transform duration-200 group-hover:scale-125"
              aria-hidden="true"
            />
            <span className="font-display">Mentis AI</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-sm font-medium transition-colors hover:text-crimson-600 ${
                    isActive
                      ? "text-crimson-600 font-semibold"
                      : "text-graphite-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-primary group text-xs uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 text-graphite-700 hover:text-graphite-950 hover:bg-graphite-100/60 rounded-xs transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Slide-in Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-graphite-950/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className={`absolute top-0 right-0 bottom-0 flex w-full max-w-xs flex-col justify-between bg-surface border-l border-graphite-200 p-6 shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-graphite-100">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-graphite-950"
              >
                <span className="h-2 w-2 bg-crimson-600" aria-hidden="true" />
                <span>Mentis AI</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-graphite-600 hover:text-graphite-950 hover:bg-graphite-100/60 rounded-xs transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-2 font-display text-base border-b border-graphite-100/50 transition-colors ${
                      isActive
                        ? "text-crimson-600 font-semibold"
                        : "text-graphite-700 hover:text-graphite-950"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.name}</span>
                    <ArrowRight
                      className="h-4 w-4 opacity-40"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Panel Footer / CTA */}
          <div className="pt-6 border-t border-graphite-100 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-xs uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="text-xs text-graphite-400 text-center font-display">
              Islamabad, Pakistan
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
