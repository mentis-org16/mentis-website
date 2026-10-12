import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development, admissions workflows, practical AI assistants, business automation and custom software for education businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services | Mentis AI",
    description:
      "Websites, admissions workflows, practical AI assistants, automation and custom software for education businesses.",
  },
  twitter: {
    title: "Services | Mentis AI",
    description:
      "Websites, admissions workflows, practical AI assistants, automation and custom software for education businesses.",
  },
};

const services = [
  [
    "01",
    "Websites & digital experiences",
    "A clear, responsive home for your institution online. We help shape the content, design the experience and build a fast website that makes the next step easy to find.",
  ],
  [
    "02",
    "Admissions & enquiry workflows",
    "Connect the first question to the right next action. We can design enquiry forms, routing and follow-up workflows around how your team actually handles admissions.",
  ],
  [
    "03",
    "Practical AI assistants",
    "Purpose-scoped assistants can help answer routine questions using information your organisation approves, with a clear route to a person when they cannot help.",
  ],
  [
    "04",
    "Automation & integrations",
    "Reduce repetitive hand-offs by connecting compatible tools and making recurring processes easier to manage. Integrations depend on the systems and access available.",
  ],
  [
    "05",
    "Dashboards & custom software",
    "When off-the-shelf tools do not fit, we can explore focused internal tools and dashboards that make information and tasks easier to work with.",
  ],
  [
    "06",
    "Ongoing improvement",
    "Launch is a beginning, not a promise of perfection. Maintenance and improvements can be scoped to your needs, access and agreed support arrangement.",
  ],
];

export default function ServicesPage() {
  return (
    <article className="interior-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Services</span>
        </nav>
        <header className="interior-hero">
          <p className="eyebrow">
            <span className="eyebrow-line" /> What we do
          </p>
          <h1>
            Digital work with
            <br />
            <em>a clear purpose.</em>
          </h1>
          <p>
            We bring design and engineering to the practical problems around
            education—online experiences, admissions, operations and the tools
            behind them.
          </p>
        </header>
        <div className="service-detail-list">
          {services.map(([number, title, text]) => (
            <section className="service-detail" key={number}>
              <span>{number}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <span className="service-label">MENTIS AI / {number}</span>
            </section>
          ))}
        </div>
        <div className="interior-cta">
          <div>
            <p className="eyebrow">No preset package required</p>
            <h2>
              Let&apos;s start with
              <br />
              <em>what you need.</em>
            </h2>
          </div>
          <Link className="button button-dark" href="/contact">
            Discuss a project <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
