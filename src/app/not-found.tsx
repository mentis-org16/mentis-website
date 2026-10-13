import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That Mentis AI page could not be found. Browse services or return home.",
};

export default function NotFound() {
  return (
    <section className="not-found container" aria-labelledby="not-found-title">
      <p className="eyebrow">
        <span className="eyebrow-line" /> 404 / Page not found
      </p>
      <h1 id="not-found-title">
        This page took a
        <br /> <em>different route.</em>
      </h1>
      <p>
        The address may have changed, or the page may no longer be here. Return
        to the homepage, browse our services, or get in touch.
      </p>
      <div>
        <Link className="button button-dark" href="/">
          <ArrowLeft size={16} aria-hidden="true" /> Back to home
        </Link>
        <Link className="underlined-link" href="/services">
          Explore services <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
