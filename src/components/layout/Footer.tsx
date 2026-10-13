import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GENERAL_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";

const LINKEDIN_URL =
  "https://www.linkedin.com/company/menttis-ai/posts/?viewAsMember=true";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="site-brand site-brand-footer" href="/">
            <Image
              className="site-brand-mark"
              src="/brand/mentis-ai-mark.webp"
              alt=""
              width={38}
              height={37}
              sizes="38px"
            />
            <span className="site-brand-name">Mentis AI</span>
          </Link>
          <p>Websites, automation and software built around real work.</p>
          <span className="footer-location">ISLAMABAD, PAKISTAN</span>
        </div>

        <nav className="footer-column" aria-label="Explore">
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/#pricing">Packages</Link>
          <Link href="/education">Education</Link>
          <Link href="/about">About Mentis</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <a href="mailto:menttis.ai@gmail.com">
            menttis.ai@gmail.com <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href="tel:+923009853541">+92 300 9853541</a>
          <a
            href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Mentis AI</span>
        <span>Digital products, made practical.</span>
        <Link href="/privacy">Privacy</Link>
        <a href="#top" className="back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
