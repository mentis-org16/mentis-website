import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getRouteMetadata } from "@/lib/site";

const description =
  "Digital experiences and practical software shaped around the needs of schools, academies, coaching centres and education businesses.";

export const metadata: Metadata = {
  title: "Education digital solutions",
  description,
  ...getRouteMetadata(
    "/education",
    "Education digital solutions | Mentis AI",
    description,
  ),
};

export default function EducationPage() {
  return (
    <article className="interior-page">
      <div className="container">
        <Breadcrumbs label="Education" path="/education" />
        <header className="interior-hero">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Built with education in mind
          </p>
          <h1>
            Every learning community
            <br />
            <em>has its own way.</em>
          </h1>
          <p>
            A school, academy or coaching centre is more than a set of pages. It
            is a community, a learning experience and a lot of everyday
            coordination.
          </p>
        </header>
        <div className="education-detail-grid">
          <section>
            <span className="detail-index">01 / BE CLEAR</span>
            <h2>Help families find what they need.</h2>
            <p>
              Make programmes, schedules, admissions information and next steps
              easier to understand. A useful website respects a family&apos;s
              time and gives your team a clearer place to point people.
            </p>
          </section>
          <section>
            <span className="detail-index">02 / KEEP THE THREAD</span>
            <h2>Make enquiries easier to handle.</h2>
            <p>
              Thoughtful intake and follow-up can make the path from a question
              to a conversation more consistent. Start by deciding what
              information your team needs and how it should reach them.
            </p>
          </section>
          <section>
            <span className="detail-index">03 / SUPPORT THE PEOPLE</span>
            <h2>Use automation where it helps.</h2>
            <p>
              Repetitive administrative steps may be candidates for automation.
              We look for small, well-defined improvements, keeping human
              judgement in the loop where it belongs.
            </p>
          </section>
          <section>
            <span className="detail-index">04 / FIT THE CONTEXT</span>
            <h2>Respect how your institution works.</h2>
            <p>
              Consider existing tools, audience, content and constraints before
              recommending a solution. The right result may be a focused
              improvement, not a wholesale replacement.
            </p>
          </section>
        </div>
        <aside className="education-note">
          <p className="eyebrow">A practical starting point</p>
          <p>
            Bring the question, the current process and any constraints you
            already know about. We can work out together whether a website,
            workflow, integration or another approach makes sense.
          </p>
          <Link className="underlined-link" href="/contact">
            Share your context <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </article>
  );
}
