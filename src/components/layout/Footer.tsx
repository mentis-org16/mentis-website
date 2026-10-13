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
          <Link className="wordmark wordmark-light" href="/">
            <span className="wordmark-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>
              mentis<span className="wordmark-ai">/ai</span>
            </span>
          </Link>
          <p>Thoughtful digital solutions for businesses and education.</p>
          <span className="footer-location">ISLAMABAD, PAKISTAN</span>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/services">Services</Link>
          <Link href="/#packages">Packages</Link>
          <Link href="/education">Education</Link>
          <Link href="/about">About Mentis</Link>
          <Link href="/contact">Contact</Link>
        </div>
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
            LinkedIn posts <ArrowUpRight size={13} aria-hidden="true" />
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
