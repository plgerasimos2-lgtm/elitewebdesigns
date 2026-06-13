"use client";

import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className={`mb-16 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
