import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">
        <span className="eyebrow-line" /> 404 / Page not found
      </p>
      <h1>
        This page took
        <br />
        <em>a different route.</em>
      </h1>
      <p>
        The address may have changed, or the page may no longer be here. You can
        return to the homepage or browse our services.
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
