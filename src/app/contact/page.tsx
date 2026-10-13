import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { GENERAL_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";
import { getRouteMetadata } from "@/lib/site";

const description =
  "Contact Mentis AI about websites, AI assistants, workflow automation and custom software for businesses and education organisations.";

export const metadata: Metadata = {
  title: "Talk about your digital project",
  description,
  ...getRouteMetadata(
    "/contact",
    "Talk about your digital project | Mentis AI",
    description,
  ),
};

export default function ContactPage() {
  return (
    <article className="interior-page contact-page">
      <div className="container">
        <Breadcrumbs label="Contact" path="/contact" />
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
              Tell us a little about your business or organisation and what you
              are trying to solve. We can take it from there—without a long form
              or a sales script.
            </p>
            <p className="contact-privacy-note">
              WhatsApp opens a pre-addressed chat with an editable message.
              Nothing is sent until you choose to send it, and this website does
              not store your enquiry.
            </p>
          </header>
          <div className="contact-options" aria-label="Contact options">
            <a
              className="contact-option contact-option-primary"
              href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <MessageCircle size={20} aria-hidden="true" />
              </span>
              <span className="contact-option-copy">
                <small>WHATSAPP · PREFERRED</small>
                <strong>+92 300 9853541</strong>
                <span>Open a ready-to-edit project enquiry</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="contact-option" href="mailto:menttis.ai@gmail.com">
              <span className="contact-icon">
                <Mail size={20} aria-hidden="true" />
              </span>
              <span className="contact-option-copy">
                <small>EMAIL</small>
                <strong>menttis.ai@gmail.com</strong>
                <span>For a project note or a detailed question</span>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="contact-option" href="tel:+923009853541">
              <span className="contact-icon">
                <Phone size={20} aria-hidden="true" />
              </span>
              <span className="contact-option-copy">
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
          <p>Islamabad, Pakistan</p>
        </div>
      </div>
    </article>
  );
}
