import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mentis AI about websites, admissions workflows, practical AI and software for education businesses. Based in Islamabad, Pakistan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Mentis AI",
    description:
      "Start a conversation with Mentis AI about digital products for education businesses.",
  },
  twitter: {
    title: "Contact Mentis AI",
    description:
      "Start a conversation with Mentis AI about digital products for education businesses.",
  },
};

export default function ContactPage() {
  return (
    <article className="interior-page contact-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>
        <div className="contact-layout">
          <header className="interior-hero">
            <p className="eyebrow">
              <span className="eyebrow-line" /> Start a conversation
            </p>
            <h1>
              What would you
              <br />
              <em>like to work better?</em>
            </h1>
            <p>
              Tell us a little about your organisation and what you are trying
              to solve. We can take it from there—without a long form or a sales
              script.
            </p>
            <p className="contact-privacy-note">
              Choose the channel that works for you. Your message goes directly
              to Mentis AI; this site does not store a contact-form submission.
            </p>
          </header>
          <div className="contact-options">
            <a className="contact-option" href="mailto:menttis.ai@gmail.com">
              <span className="contact-icon">
                <Mail size={20} aria-hidden="true" />
              </span>
              <span>
                <small>EMAIL</small>
                <strong>menttis.ai@gmail.com</strong>
                <span>For a project note or a detailed question</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              className="contact-option"
              href="https://wa.me/923009853541"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <MessageCircle size={20} aria-hidden="true" />
              </span>
              <span>
                <small>WHATSAPP</small>
                <strong>+92 300 9853541</strong>
                <span>For a quick first conversation</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="contact-option" href="tel:+923009853541">
              <span className="contact-icon">
                <Phone size={20} aria-hidden="true" />
              </span>
              <span>
                <small>PHONE</small>
                <strong>+92 300 9853541</strong>
                <span>Call Mentis AI directly</span>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-footnote">
          <span>01 / LOCATION</span>
          <p>
            Islamabad, Pakistan
            <br />
            Working with education businesses wherever they are.
          </p>
        </div>
      </div>
    </article>
  );
}
