import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getRouteMetadata } from "@/lib/site";

const description =
  "How the Mentis AI marketing website and its fictional, local Academy Assistant example handle information.";

export const metadata: Metadata = {
  title: "Website privacy information",
  description,
  ...getRouteMetadata(
    "/privacy",
    "Website privacy information | Mentis AI",
    description,
  ),
};

export default function PrivacyPage() {
  return (
    <article className="interior-page">
      <div className="container">
        <Breadcrumbs label="Privacy" path="/privacy" />
        <header className="interior-hero">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Website information
          </p>
          <h1>
            Privacy,
            <br /> <em>made clear.</em>
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
          <h2>The Academy Assistant example</h2>
          <p>
            The Academy Assistant is a fictional, local demonstration. It uses
            predefined example responses in your browser; it is not connected to
            an AI service, a real academy, WhatsApp or student records. Messages
            remain in the page&apos;s temporary in-memory state and are not sent
            to Mentis AI or saved by this website.
          </p>
          <h2>When you contact Mentis AI</h2>
          <p>
            Email, telephone and WhatsApp links open the relevant communication
            service. WhatsApp opens a pre-addressed chat with an editable
            message; nothing is sent until you choose to send it. If you choose
            to contact Mentis AI, your message and any information you include
            are handled through that service and the channel you selected. Avoid
            sending sensitive information unless it is necessary.
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
