import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mentis AI, an independent Islamabad-based technology studio building practical websites, AI assistants, workflow automation and custom software for businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Mentis AI",
    description:
      "A practical technology partner for businesses, with education as an important area of focus.",
  },
  twitter: {
    title: "About Mentis AI",
    description:
      "A practical technology partner for businesses, with education as an important area of focus.",
  },
};

export default function AboutPage() {
  return (
    <article className="interior-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">About</span>
        </nav>
        <header className="interior-hero">
          <p className="eyebrow">
            <span className="eyebrow-line" /> About Mentis AI
          </p>
          <h1>
            Technology should
            <br />
            <em>earn its place.</em>
          </h1>
          <p>
            Mentis AI is an independent software and design business based in
            Islamabad. We help businesses and organisations make practical,
            considered use of digital technology.
          </p>
        </header>
        <section className="about-statement">
          <span className="detail-index">OUR POINT OF VIEW</span>
          <div>
            <h2>
              Start with people.
              <br />
              Solve the real thing.
            </h2>
            <p>
              Good work comes from understanding the people who use a service
              and the people who run it. We pair thoughtful design with software
              engineering to make digital experiences clearer and practical
              processes easier to manage.
            </p>
            <p>
              That may mean a carefully built website, a more considered enquiry
              journey, a bounded AI assistant, an automation or a focused
              internal tool. Education is an important area of focus, but the
              same problem-first approach applies to businesses beyond
              education. Not every problem needs AI, and no single solution
              suits every organisation.
            </p>
          </div>
        </section>
        <section className="about-principles">
          <p className="eyebrow">How we approach the work</p>
          <div>
            <h3>Useful over impressive.</h3>
            <p>Choose technology for the job it can genuinely do.</p>
          </div>
          <div>
            <h3>Clear over complicated.</h3>
            <p>Make the experience and the next step easy to understand.</p>
          </div>
          <div>
            <h3>Collaborative by default.</h3>
            <p>
              Agree the scope and constraints with the people closest to the
              work.
            </p>
          </div>
        </section>
        <div className="interior-cta">
          <div>
            <p className="eyebrow">Based in Islamabad, Pakistan</p>
            <h2>
              Good work begins
              <br />
              <em>with a conversation.</em>
            </h2>
          </div>
          <Link className="button button-dark" href="/contact">
            Get in touch <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
