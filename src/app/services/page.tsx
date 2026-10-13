import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, AI assistants, business automation, integrations, dashboards and custom software for businesses and organisations in Pakistan.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Services | Mentis AI",
    description:
      "Practical digital solutions for businesses, organisations and education teams.",
  },
  twitter: {
    title: "Services | Mentis AI",
    description:
      "Practical digital solutions for businesses, organisations and education teams.",
  },
};

const services = [
  [
    "01",
    "Websites & digital experiences",
    "A clear, responsive home for your business or organisation online. We help shape the content and build a considered digital experience that makes your offer and next step easier to understand.",
  ],
  [
    "02",
    "Enquiry & customer workflows",
    "Connect the first question to the right next action. We can explore enquiry capture, routing and follow-up workflows around how your team actually works—including admissions for education organisations.",
  ],
  [
    "03",
    "Practical AI assistants",
    "Purpose-scoped assistants can answer routine questions using information your organisation approves, with suitable limits and a clear route to a person.",
  ],
  [
    "04",
    "Automation & integrations",
    "Reduce repetitive hand-offs by connecting compatible tools and making recurring processes easier to manage. Feasibility depends on the systems, interfaces and access available.",
  ],
  [
    "05",
    "Dashboards & custom software",
    "When off-the-shelf tools do not fit, we can explore focused internal tools and dashboards that make information and everyday tasks easier to work with.",
  ],
  [
    "06",
    "Ongoing improvement",
    "Maintenance and improvements can be scoped to your needs, access and an agreed support arrangement. Ongoing services and third-party costs are clarified before work begins.",
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
            We bring design and engineering to practical business problems:
            websites, AI assistants, automation, custom software and the tools
            behind them. Education organisations are an important part of our
            work too.
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
