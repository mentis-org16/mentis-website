import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Blocks, Braces, Workflow } from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Blocks,
    title: "Websites that explain the value",
    text: "Clear, fast websites for schools, academies and education businesses—designed to answer the questions families actually have.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Enquiry journeys that keep moving",
    text: "Thoughtful admissions and enquiry flows that help a prospective student move from first visit to a useful conversation.",
  },
  {
    number: "03",
    icon: Braces,
    title: "Software that fits the work",
    text: "Practical AI assistants, automations, dashboards and integrations, scoped around a real process—not technology for its own sake.",
  },
];

const faqs = [
  [
    "Who do you work with?",
    "Schools, academies, coaching centres, educators and other education-focused businesses. We also consider adjacent projects where the problem and fit are clear.",
  ],
  [
    "Can a website reflect our institution's own process?",
    "Yes. We start by understanding your audience, content and day-to-day workflow, then shape the site and enquiry path around those needs.",
  ],
  [
    "Can an AI assistant use our approved information?",
    "An assistant can be designed around information you provide and approve. Its scope, escalation behaviour and limitations should be agreed before it is introduced.",
  ],
  [
    "How are scope, timing and pricing decided?",
    "They depend on the work. We clarify the goals, requirements and deliverables first, then discuss a project scope and estimate. We do not publish a one-size-fits-all promise.",
  ],
  [
    "Can you work with systems we already use?",
    "We can assess existing tools and integration options during discovery. Feasibility depends on the systems' available interfaces and access.",
  ],
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function SpatialMark() {
  return (
    <div className="spatial" aria-hidden="true">
      <div className="spatial-caption">
        <span>LEARNING, CONNECTED</span>
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
          SYSTEMS
        </span>
      </div>
      <span className="node node-one">DISCOVER</span>
      <span className="node node-two">ENROL</span>
      <span className="node node-three">SUPPORT</span>
      <div className="spatial-coordinate">
        33°41&apos; N<br />
        73°03&apos; E
      </div>
      <div className="spatial-index">
        A practical
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
            <span className="eyebrow-line" /> Digital products for education
          </p>
          <h1 id="hero-title">
            Technology built around <em>how education works.</em>
          </h1>
          <p className="hero-intro">
            Mentis AI designs and builds websites, enquiry journeys and useful
            software for schools, academies and education businesses.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              Talk about a project <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/services">
              Explore what we build <ArrowDown size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-note">
            <span className="note-rule" /> Independent technology studio
            <br />
            Working from Islamabad, Pakistan
          </div>
        </div>
        <SpatialMark />
        <div className="hero-index">
          <span>01</span>
          <span>DESIGN × ENGINEERING × EDUCATION</span>
        </div>
      </section>

      <section className="intro-band" aria-label="Our approach">
        <div className="container intro-band-inner">
          <p className="eyebrow">The point is the work</p>
          <p className="intro-statement">
            Good technology makes the <span>important work easier to do.</span>
          </p>
          <p className="intro-aside">
            We bring product thinking, careful design and software engineering
            together around the realities of education.
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
            engagement starts with the problem—not a preset package.
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

      <section className="education-section" aria-labelledby="education-title">
        <div className="container education-layout">
          <div className="education-stamp">
            <span>MADE FOR</span>
            <strong>
              EDU
              <br />
              CATION
            </strong>
            <span>NOT RETROFITTED</span>
          </div>
          <div className="education-copy">
            <p className="eyebrow eyebrow-light">
              An education-first point of view
            </p>
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
              We design around these everyday realities, whether the answer is a
              better website, a small automation or a more considered digital
              system.
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
        <div className="process-steps">
          <article>
            <span>01 / UNDERSTAND</span>
            <h3>Listen before proposing</h3>
            <p>
              We learn who you serve, what is getting in the way and what a
              useful outcome would look like.
            </p>
          </article>
          <article>
            <span>02 / SHAPE</span>
            <h3>Agree what matters</h3>
            <p>
              We define the experience, scope and practical constraints together
              before implementation begins.
            </p>
          </article>
          <article>
            <span>03 / BUILD</span>
            <h3>Make, review, improve</h3>
            <p>
              We deliver the agreed work in considered steps and leave room for
              feedback and iteration.
            </p>
          </article>
        </div>
      </section>

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
              A website, an operational bottleneck or an idea you are still
              shaping—we would like to hear about it.
            </p>
            <Link className="button button-light" href="/contact">
              Start a conversation <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <span className="closing-mark" aria-hidden="true">
            M.
          </span>
        </div>
      </section>
    </>
  );
}
