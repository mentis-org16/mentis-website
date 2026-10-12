"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link
          className="wordmark"
          href="/"
          aria-label="Mentis AI home"
          onClick={closeMenu}
        >
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>
            mentis<span className="wordmark-ai">/ai</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <Link className="header-cta" href="/contact">
          Start a conversation <ArrowRight size={14} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav${isMenuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={closeMenu}
          >
            {item.name}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ))}
        <Link href="/contact" onClick={closeMenu}>
          Contact
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <p>Islamabad, Pakistan · Working everywhere</p>
      </nav>
    </header>
  );
}
