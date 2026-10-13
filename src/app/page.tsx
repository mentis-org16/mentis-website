import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Braces,
  GraduationCap,
  MessageCircle,
  Workflow,
} from "lucide-react";
import { AcademyAssistant } from "@/components/home/AcademyAssistant";
import { PackagesSection } from "@/components/home/PackagesSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { GENERAL_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";
import { getRouteMetadata } from "@/lib/site";

const pageDescription =
  "Websites, AI assistants, workflow automation and custom software for businesses. Mentis AI also works with schools, academies and learning organisations.";

export const metadata: Metadata = {
  title: "Digital solutions for business | Mentis AI",
  description: pageDescription,
  ...getRouteMetadata(
    "/",
    "Digital solutions for business | Mentis AI",
    pageDescription,
  ),
};

const capabilities = [
  {
    number: "01",
    icon: Blocks,
    title: "Websites & web applications",
    text: "Give customers a clear, responsive way to understand your offer, find useful information and take the next step.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "AI assistants & agents",
    text: "Explore purpose-scoped assistants that answer common questions from information you approve, with a route to a person.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Workflow automation",
    text: "Reduce repetitive hand-offs and connect compatible tools where that makes everyday work easier to manage.",
  },
  {
    number: "04",
    icon: Braces,
    title: "Custom software",
    text: "When existing tools do not fit, scope a focused digital system around your requirements and constraints.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Education technology",
    text: "Support schools, academies and learning businesses with useful sites, enquiry journeys and administrative tools.",
  },
];

const faqs = [
  [
    "Who does Mentis AI work with?",
    "We work with businesses and organisations looking for a useful digital solution. Schools, academies, coaching centres and education businesses are an important specialism—not the only audience.",
  ],
  [
    "What if I am not sure what to build?",
    "Start with what is getting in the way. We can discuss the problem and constraints before deciding whether a website, workflow, assistant or custom software is suitable.",
  ],
  [
    "Is the Academy Assistant a live AI service?",
    "No. It is a fictional, local demonstration with predefined example replies. It does not connect to an AI service, academy, WhatsApp or student records.",
  ],
  [
    "How are scope, pricing and timing agreed?",
    "They depend on the project. Deliverables, timeline, revision terms, support and any third-party costs are clarified before work begins. Contact us for pricing.",
  ],
  [
    "Can a solution work with our existing tools?",
    "Integration options can be assessed during discovery. Feasibility depends on the systems, interfaces and access available, and any ongoing service costs are discussed up front.",
  ],
] as const;

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Digital products · Islamabad
          </p>
          <h1 id="hero-title">
            Useful digital systems, <em>built around your work.</em>
          </h1>
          <p className="hero-intro">
            We design and build websites, AI assistants, workflow automation and
            custom software for businesses. Education is a specialism, not the
            whole story.
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell us what needs to work better{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link className="text-link" href="/services">
              Explore services <ArrowDown size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-note">
            Start with the people, the task and the constraints.
          </p>
        </div>

        <aside className="hero-brand-panel" aria-label="Mentis AI identity">
          <p className="eyebrow hero-brand-label">Mentis AI / 01</p>
          <Image
            className="hero-logo"
            src="/brand/mentis-ai-lockup.webp"
            alt="Mentis AI logo"
            width={500}
            height={482}
            priority
            sizes="(max-width: 760px) 72vw, 360px"
          />
          <p className="hero-brand-caption">
            Websites <span>/</span> Assistants <span>/</span> Workflows{" "}
            <span>/</span> Software
          </p>
        </aside>

        <div className="hero-index" aria-label="Areas of work">
          <span>01</span>
          <span>WEBSITES × PRACTICAL AI × AUTOMATION × SOFTWARE</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Our approach">
        <div className="container intro-band-inner">
          <p className="eyebrow">The point is the work</p>
          <p className="intro-statement">
            Good technology makes <span>important work easier to do.</span>
          </p>
          <p className="intro-aside">
            We understand the people, task and limits first—then work out which
            digital solution actually fits.
          </p>
        </div>
      </section>

      <section
        className="section container capabilities"
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <span id="work" className="anchor-alias" aria-hidden="true" />
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              What we make <span className="eyebrow-line" />
            </p>
            <h2 id="capabilities-title">
              Useful by design.
              <br />
              <em>Built to fit.</em>
            </h2>
          </div>
          <p className="section-lead">
            From a clear first impression to the processes behind it, each
            engagement starts with the problem—not a fixed technology or preset
            solution.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map(({ number, icon: Icon, title, text }) => (
            <article className="capability-row" key={number}>
              <span className="row-number">{number}</span>
              <div className="row-icon">
                <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="row-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowRight className="row-arrow" size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
        <Link className="underlined-link" href="/services">
          See the services <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <AcademyAssistant />

      <section className="education-section" aria-labelledby="education-title">
        <div className="container education-layout">
          <div className="education-stamp">
            <span>AN AREA OF FOCUS</span>
            <strong>EDUCATION</strong>
            <span>BUILT AROUND PEOPLE</span>
          </div>
          <div className="education-copy">
            <p className="eyebrow eyebrow-light">Thoughtfully applied</p>
            <h2 id="education-title">
              The details matter
              <br />
              when <em>people are learning.</em>
            </h2>
            <p>
              Families need clear information. Admissions teams need enquiries
              they can act on. Educators need tools that support their work
              without adding friction.
            </p>
            <p>
              We bring the same problem-first approach to other organisations:
              understand the day-to-day work, identify what could be better, and
              scope a useful way forward.
            </p>
            <Link className="button button-light" href="/education">
              How we work with education{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="education-coordinate">
            BASED IN ISLAMABAD
            <br />
            PAKISTAN
          </p>
        </div>
      </section>

      <section
        className="section container process-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              A considered process <span className="eyebrow-line" />
            </p>
            <h2 id="process-title">
              Start with the
              <br />
              <em>actual problem.</em>
            </h2>
          </div>
          <p className="section-lead">
            Clear decisions early make better digital work later. We keep the
            process collaborative and the scope grounded.
          </p>
        </div>
        <div className="process-steps">
          <article>
            <span>01 / DISCUSS</span>
            <h3>Understand the problem</h3>
            <p>
              We learn who you serve, what is getting in the way and what a
              useful outcome would look like.
            </p>
          </article>
          <article>
            <span>02 / SCOPE</span>
            <h3>Agree what matters</h3>
            <p>
              We define deliverables, timeline and practical constraints before
              implementation begins.
            </p>
          </article>
          <article>
            <span>03 / BUILD</span>
            <h3>Make and review</h3>
            <p>
              We build the agreed solution in considered steps and make room for
              your feedback.
            </p>
          </article>
          <article>
            <span>04 / DELIVER</span>
            <h3>Test and hand over</h3>
            <p>
              We test the work, refine it with agreed feedback and arrange
              launch or handover for the project.
            </p>
          </article>
        </div>
      </section>

      <PackagesSection />

      <section className="faq-section" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">
              A few useful answers <span className="eyebrow-line" />
            </p>
            <h2 id="faq-title">
              Before we
              <br />
              <em>get started.</em>
            </h2>
            <p className="faq-intro">
              Still have a question? Tell us what you are working on and we can
              take it from there.
            </p>
            <Link className="underlined-link" href="/contact">
              Ask us directly <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="faq-item" key={question}>
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  <span>{question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta" id="contact" aria-labelledby="cta-title">
        <div className="container closing-inner">
          <p className="eyebrow eyebrow-light">A good place to begin</p>
          <h2 id="cta-title">
            Tell us what needs
            <br />
            <em>to work better.</em>
          </h2>
          <div className="closing-bottom">
            <p>
              A website, a workflow, an assistant or an idea for custom
              software—start by telling us what is getting in the way.
            </p>
            <a
              className="button button-light"
              href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell us what you need <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <Image
            className="closing-mark"
            src="/brand/mentis-ai-mark.webp"
            alt=""
            width={80}
            height={77}
            sizes="80px"
          />
        </div>
      </section>
    </>
  );
}
