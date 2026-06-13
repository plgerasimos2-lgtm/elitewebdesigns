"use client";

import { navLinks, services } from "@/lib/data";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Elite Web Designs Logo"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="font-display text-lg font-bold text-white">
                Elite Web Designs
              </span>
            </div>
            <p className="text-sm leading-relaxed text-secondary">
              Premium digital agency που δημιουργεί ιστοσελίδες υψηλής αισθητικής
              και απόδοσης για επιχειρήσεις που θέλουν να ξεχωρίσουν online.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Σύνδεσμοι
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Υπηρεσίες
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <span className="text-sm text-secondary">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Επικοινωνία
            </h3>
            <a
              href="mailto:elitewebdesigns2@gmail.com"
              className="mb-6 flex items-center gap-2 text-sm text-secondary transition-colors hover:text-accent"
            >
              <Mail size={16} />
              elitewebdesigns2@gmail.com
            </a>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Social Media
            </h3>
            <div className="flex">
              <a
                href="https://instagram.com/elite.web1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/30 hover:from-purple-600/20 hover:to-pink-600/20 hover:shadow-[0_0_20px_rgba(219,39,119,0.15)]"
              >
                <svg
                  className="h-4.5 w-4.5 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Elite Web Designs. All rights reserved.
          </p>
          <p className="text-xs text-secondary/60">
            Designed & Built with passion in Greece
          </p>
        </div>
      </div>
    </footer>
  );
}
