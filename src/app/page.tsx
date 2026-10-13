import type { Metadata } from "next";
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
import { GENERAL_ENQUIRY_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";

const capabilities = [
  {
    number: "01",
    icon: Blocks,
    title: "Websites & web applications",
    text: "Give customers and communities a clear, responsive way to understand what you offer and take the next step.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "AI assistants & intelligent agents",
    text: "Explore assistants that answer common questions from approved information, with sensible limits and a route to a person.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Workflow automation",
    text: "Reduce repetitive hand-offs and connect compatible tools when doing so makes everyday work easier.",
  },
  {
    number: "04",
    icon: Braces,
    title: "Custom software",
    text: "When off-the-shelf tools do not fit, shape a focused digital system around your requirements and constraints.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Education solutions",
    text: "Support schools, academies and learning businesses with useful websites, enquiry journeys and administrative tools.",
  },
];

const faqs = [
  [
    "Who do you work with?",
    "We work with businesses and organisations that need a useful digital solution. Schools, academies, coaching centres and education businesses are an important part of our focus—not the only audience.",
  ],
  [
    "What if I am not sure what to build?",
    "That is a good place to start. Tell us what is getting in the way; we can discuss the problem before recommending a website, workflow, assistant or custom software.",
  ],
  [
    "Can an assistant use information we approve?",
    "A real assistant can be scoped around information your organisation approves, with suitable limits and a route to a person. The one on this page is a local illustration only.",
  ],
  [
    "How do scope, price and timing work?",
    "They depend on the project. We clarify goals and requirements first, then agree the deliverables, timeline, revision terms and any third-party costs before work begins.",
  ],
  [
    "Can you work with tools we already use?",
    "We can assess integration options during discovery. Feasibility depends on the systems, interfaces and access available, and any ongoing service costs are discussed up front.",
  ],
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function SpatialMark() {
  return (
    <div className="spatial" aria-hidden="true">
      <div className="spatial-caption">
        <span>SYSTEMS, CONNECTED</span>
        <span>01 — 03</span>
      </div>
      <div className="spatial-orbit spatial-orbit-a" />
      <div className="spatial-orbit spatial-orbit-b" />
      <div className="spatial-orbit spatial-orbit-c" />
      <div className="spatial-core">
        <span className="core-dot" />
        <span className="core-label">
          MENTIS
          <br />
          AI
        </span>
      </div>
      <span className="node node-one">CONNECT</span>
      <span className="node node-two">SUPPORT</span>
      <span className="node node-three">AUTOMATE</span>
      <div className="spatial-coordinate">
        33°41&apos; N
        <br />
        73°03&apos; E
      </div>
      <div className="spatial-index">
        A considered
        <br />
        digital foundation
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Digital solutions for business
          </p>
          <h1 id="hero-title">
            Digital solutions for <em>the way you work.</em>
          </h1>
          <p className="hero-intro">
            We build websites, AI assistants, workflow automation and custom
            software for businesses. We also help schools, academies and
            education organisations improve the digital parts of their work.
          </p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href={getWhatsAppHref(GENERAL_ENQUIRY_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell us what you need <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link className="text-link" href="/services">
              Explore our services <ArrowDown size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-rule" /> Independent digital solutions studio
            <br />
            Working from Islamabad, Pakistan
          </div>
        </div>
        <SpatialMark />
        <div className="hero-index">
          <span>01</span>
          <span>PRODUCT THINKING × SOFTWARE × PRACTICAL AI</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Our approach">
        <div className="container intro-band-inner">
          <p className="eyebrow">The point is the work</p>
          <p className="intro-statement">
            Good technology makes the <span>important work easier to do.</span>
          </p>
          <p className="intro-aside">
            We start with the people, task and constraints—then work out which
            digital solution actually fits.
          </p>
        </div>
      </section>

      <section
        className="section container capabilities"
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
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
          See our capabilities <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </section>

      <AcademyAssistant />

      <section className="education-section" aria-labelledby="education-title">
        <div className="container education-layout">
          <div className="education-stamp">
            <span>ONE AREA OF FOCUS</span>
            <strong>
              EDU
              <br />
              CATION
            </strong>
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
              We bring the same practical approach to other businesses too:
              understand the day-to-day work, identify what could be better, and
              scope a useful way forward.
            </p>
            <Link className="button button-light" href="/education">
              How we work with education{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="education-coordinate">
            ISLAMABAD / PAKISTAN
            <br />
            WORKING EVERYWHERE
          </div>
        </div>
      </section>

      <section
        className="section container process-section"
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
        <div className="process-steps process-steps-four">
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
              We define the deliverables, timeline and practical constraints
              before implementation begins.
            </p>
          </article>
          <article>
            <span>03 / BUILD</span>
            <h3>Make and review</h3>
            <p>
              We build the agreed solution in considered steps and make space
              for your feedback.
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

      <section className="closing-cta" aria-labelledby="cta-title">
        <div className="container closing-inner">
          <p className="eyebrow eyebrow-light">A good place to begin</p>
          <h2 id="cta-title">
            Tell us what needs
            <br />
            <em>to work better.</em>
          </h2>
          <div className="closing-bottom">
            <p>
              A website, an operational bottleneck, an assistant or an idea for
              custom software—we would like to hear about it.
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
          <span className="closing-mark" aria-hidden="true">
            M.
          </span>
        </div>
      </section>
    </>
  );
}
