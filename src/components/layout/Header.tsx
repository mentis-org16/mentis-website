"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { GENERAL_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";

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
          className="site-brand"
          href="/"
          aria-label="Mentis AI home"
          onClick={closeMenu}
        >
          <Image
            className="site-brand-mark"
            src="/brand/mentis-ai-mark.webp"
            alt=""
            width={44}
            height={43}
            priority
            sizes="44px"
          />
          <span className="site-brand-name">Mentis AI</span>
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

        <a
          className="header-cta"
          href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp us <ArrowRight size={14} aria-hidden="true" />
        </a>

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
        <p>Based in Islamabad, Pakistan</p>
      </nav>
    </header>
  );
}
