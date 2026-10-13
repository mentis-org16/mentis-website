import { ArrowUpRight, Check } from "lucide-react";
import { getWhatsAppHref } from "@/lib/whatsapp";

type Package = {
  name: string;
  audience: string;
  features: string[];
  cta: string;
  message: string;
};

const packages: Package[] = [
  {
    name: "Starter",
    audience: "A focused first step online",
    features: [
      "A focused website or landing page",
      "Mobile-first layout",
      "Clear enquiry route",
      "Page content and SEO scope agreed",
      "Revisions agreed in writing",
    ],
    cta: "Discuss Starter",
    message:
      "Assalam-o-Alaikum, I'm interested in the Starter project option from Mentis AI. Could we discuss the scope and pricing?",
  },
  {
    name: "Growth",
    audience: "For a wider set of pages or needs",
    features: [
      "Multi-page website scope",
      "Custom functionality, where needed",
      "Content management, where suitable",
      "Optional email or WhatsApp integration",
      "Timeline and revision terms agreed",
    ],
    cta: "Discuss Growth",
    message:
      "Assalam-o-Alaikum, I'm interested in the Growth project option from Mentis AI. Could we discuss the scope and pricing?",
  },
  {
    name: "Enterprise",
    audience: "For a tailored digital project",
    features: [
      "Custom requirements and scope",
      "Software or AI, where appropriate",
      "Integration feasibility assessment",
      "Deployment plan agreed for the project",
      "Support terms agreed in writing",
    ],
    cta: "Discuss a project",
    message:
      "Assalam-o-Alaikum, I'd like to discuss a tailored digital project with Mentis AI. Could we talk about the requirements and pricing?",
  },
];

export function PackagesSection() {
  return (
    <section
      className="packages-section"
      id="pricing"
      aria-labelledby="packages-title"
    >
      <span id="packages" className="anchor-alias" aria-hidden="true" />
      <div className="container">
        <div className="packages-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Starting points, not fixed terms
            </p>
            <h2 id="packages-title">
              Three ways to <em>begin.</em>
            </h2>
          </div>
          <p>
            Every project is scoped around what you need. We confirm
            deliverables, revision limits, timeline, support and any third-party
            costs before work begins.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((plan, index) => (
            <article className="package-card" key={plan.name}>
              <p className="package-audience">
                0{index + 1} / {plan.audience}
              </p>
              <h3>{plan.name}</h3>
              <p className="package-price">Contact us for pricing.</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                className="button button-outline"
                href={getWhatsAppHref(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${plan.cta} — ask Mentis AI on WhatsApp`}
              >
                {plan.cta} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="package-terms">
          These are conversation starters, not binding offers. We agree the
          scope, price, revision limits, delivery timing and support in writing.
          Hosting, AI usage, messaging, APIs and other third-party services may
          have separate costs.
        </p>
      </div>
    </section>
  );
}
