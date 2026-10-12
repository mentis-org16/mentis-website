import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the Mentis AI website handles information and direct contact links.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy | Mentis AI",
    description:
      "How the Mentis AI website handles information and direct contact links.",
  },
  twitter: {
    title: "Privacy | Mentis AI",
    description:
      "How the Mentis AI website handles information and direct contact links.",
  },
};

export default function PrivacyPage() {
  return (
    <article className="interior-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Privacy</span>
        </nav>
        <header className="interior-hero">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Website information
          </p>
          <h1>
            Privacy,
            <br />
            <em>made clear.</em>
          </h1>
          <p>
            This page describes the current Mentis AI marketing website, not
            every service that may be developed for clients.
          </p>
        </header>
        <div className="privacy-copy">
          <h2>Information on this website</h2>
          <p>
            This marketing website does not include an account, analytics
            tracker or contact-submission form. It does not ask you to enter
            personal details into the site.
          </p>
          <h2>When you contact Mentis AI</h2>
          <p>
            Email, telephone and WhatsApp links open the relevant communication
            service. If you choose to contact Mentis AI, your message and any
            information you include are handled through that service and the
            channel you selected. Avoid sending sensitive information unless it
            is necessary.
          </p>
          <h2>Third-party services</h2>
          <p>
            Following an external link may connect you to a service with its own
            privacy practices. Please review that service&apos;s information
            directly. This website does not control third-party platforms.
          </p>
          <h2>Questions</h2>
          <p>
            For a question about this website&apos;s privacy, contact{" "}
            <a href="mailto:menttis.ai@gmail.com">menttis.ai@gmail.com</a>.
          </p>
          <p className="privacy-updated">Last reviewed: 13 October 2026</p>
        </div>
      </div>
    </article>
  );
}
