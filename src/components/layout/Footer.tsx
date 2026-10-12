import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks: FooterLink[] = [
  { label: "Education Websites", href: "/education" },
  { label: "AI Assistants", href: "/services" },
  { label: "Automation", href: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-graphite-900 text-graphite-300 border-t border-graphite-800">
      <div className="container-wide py-16 md:py-20">
        {/* 4-column Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white focus-visible:outline-hidden"
              aria-label="Mentis AI Home"
            >
              <span
                className="h-2 w-2 bg-crimson-600 transition-transform duration-200 group-hover:scale-125"
                aria-hidden="true"
              />
              <span className="font-display">Mentis AI</span>
            </Link>
            <p className="mt-4 text-sm text-graphite-400 leading-relaxed max-w-xs">
              Digital solutions built around how education works.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-graphite-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-graphite-500" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-graphite-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white">
              Solutions
            </h3>
            <ul className="mt-5 space-y-3">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-graphite-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="mailto:menttis.ai@gmail.com"
                  className="text-sm text-graphite-400 hover:text-white transition-colors block break-all"
                >
                  menttis.ai@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+923009853541"
                  className="text-sm text-graphite-400 hover:text-white transition-colors"
                >
                  +92-300-9853541
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/923009853541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-graphite-400 hover:text-white transition-colors"
                >
                  <span>WhatsApp</span>
                  <span className="text-xs text-graphite-500 font-mono">↗</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-graphite-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-graphite-400">
          <p>© 2024 Mentis AI · All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
