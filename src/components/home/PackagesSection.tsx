import { ArrowUpRight, Check } from "lucide-react";
import { getWhatsAppHref } from "@/lib/whatsapp";

type Package = {
  name: string;
  audience: string;
  price: string;
  features: string[];
  cta: string;
  message: string;
  highlight?: boolean;
};

const packages: Package[] = [
  {
    name: "Starter",
    audience: "For small businesses getting online",
    price: "Contact us for pricing.",
    features: [
      "Landing page",
      "SEO setup",
      "Mobile responsive",
      "Email integration",
      "2 revision rounds",
    ],
    cta: "Get Started",
    message:
      "Assalam-o-Alaikum, I'm interested in the Starter package from Mentis AI. Could you share the pricing and details?",
  },
  {
    name: "Growth",
    audience: "For academies and growing businesses",
    price: "Contact us for pricing.",
    features: [
      "Multi-page website",
      "Custom website functionality",
      "CMS and dashboard, where scoped",
      "Email + WhatsApp integration",
      "5 revision rounds",
    ],
    cta: "Get Started",
    message:
      "Assalam-o-Alaikum, I'm interested in the Growth package from Mentis AI. Could you share the pricing and details?",
    highlight: true,
  },
  {
    name: "Enterprise",
    audience: "Custom solutions for more complex business needs",
    price: "Contact us for pricing.",
    features: [
      "Custom project scope",
      "AI integration, where appropriate",
      "Deployment to an agreed cloud platform",
      "Unlimited revisions*",
      "Priority support and monthly reports, where agreed",
    ],
    cta: "Book a Call",
    message:
      "Assalam-o-Alaikum, I'd like to discuss the Enterprise package and explore a custom solution for my business.",
  },
];

export function PackagesSection() {
  return (
    <section
      className="packages-section"
      id="packages"
      aria-labelledby="packages-title"
    >
      <div className="container">
        <div className="packages-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> A starting point, not a
              straitjacket
            </p>
            <h2 id="packages-title">
              Three ways to <em>begin.</em>
            </h2>
          </div>
          <p>
            Every project is scoped around what you need. These outlines help
            start the conversation; we confirm deliverables, revisions,
            timeline, third-party costs and support terms before work begins.
          </p>
        </div>

        <div className="package-grid">
          {packages.map((plan) => (
            <article
              className={`package-card${plan.highlight ? " package-card--featured" : ""}`}
              key={plan.name}
            >
              {plan.highlight && (
                <span className="package-badge">Most Popular</span>
              )}
              <p className="package-audience">{plan.audience}</p>
              <h3>{plan.name}</h3>
              <p className="package-price">{plan.price}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                className={
                  plan.highlight
                    ? "button button-dark"
                    : "button button-outline"
                }
                href={getWhatsAppHref(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${plan.cta} — ask about the ${plan.name} package on WhatsApp`}
              >
                {plan.cta} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="package-terms">
          Package features are discussion starters, not fixed commercial terms.
          The Enterprise unlimited-revisions concept is unconfirmed and must be
          replaced with a written revision limit before it is offered. AI usage,
          hosting, messaging, APIs, maintenance, support and reporting must also
          be agreed for each project; third-party services may have separate
          costs.
        </p>
      </div>
    </section>
  );
}
