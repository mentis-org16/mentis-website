import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getRouteMetadata } from "@/lib/site";

const description =
  "Websites, practical AI assistants, workflow automation and custom software for businesses and organisations, including education teams.";

export const metadata: Metadata = {
  title: "Digital services for businesses",
  description,
  ...getRouteMetadata(
    "/services",
    "Digital services for businesses | Mentis AI",
    description,
  ),
};

const services = [
  [
    "01",
    "Websites & digital experiences",
    "A clear, responsive home for your business or organisation online. We help shape the content and build an experience that makes your offer and next step easier to understand.",
  ],
  [
    "02",
    "Enquiry & customer workflows",
    "Connect a first question to a useful next action. We can explore enquiry capture, routing and follow-up around how your team works—including admissions enquiries for education organisations.",
  ],
  [
    "03",
    "Practical AI assistants",
    "Purpose-scoped assistants can answer routine questions using information your organisation approves, with appropriate limits and a clear route to a person.",
  ],
  [
    "04",
    "Automation & integrations",
    "Reduce repetitive hand-offs by connecting compatible tools and making recurring processes easier to manage. Feasibility depends on the systems, interfaces and access available.",
  ],
  [
    "05",
    "Dashboards & custom software",
    "When off-the-shelf tools do not fit, scope focused internal tools and dashboards around the information and everyday tasks your team needs to work with.",
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
        <Breadcrumbs label="Services" path="/services" />
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
            websites, assistants, automation and custom software. Education is
            an important area of focus too.
          </p>
        </header>
        <div className="service-detail-list">
          {services.map(([number, title, text]) => (
            <section className="service-detail" key={number}>
              <span className="service-number">{number}</span>
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
