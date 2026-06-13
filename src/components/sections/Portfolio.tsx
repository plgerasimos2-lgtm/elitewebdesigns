"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

function ProjectMockup({
  title,
  gradient,
  accent,
  image,
}: {
  title: string;
  gradient: string;
  accent: string;
  image?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 bg-[#050505]/40" />
      <div className="absolute inset-4 overflow-hidden rounded-lg border border-white/10 bg-[#0F0F0F]/80 backdrop-blur-sm">
        {/* Mock Browser Header */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#0F0F0F]/90 px-4 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
        </div>
        {/* Mock Browser Body */}
        {image ? (
          <div className="relative h-[calc(100%-24px)] w-full overflow-hidden bg-zinc-950">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="p-4 h-[calc(100%-24px)] relative">
            <div
              className="mb-3 h-16 rounded-md"
              style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }}
            />
            <div className="space-y-2">
              <div className="h-2 w-2/3 rounded bg-white/10" />
              <div className="h-2 w-full rounded bg-white/5" />
              <div className="h-2 w-4/5 rounded bg-white/5" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-semibold text-white/80">{title}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Portfolio"
          title="Τα Έργα μας"
          subtitle="Επιλεγμένα projects που αντικατοπτρίζουν την ποιότητα και την αισθητική μας."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl transition-all"
                data-cursor="hover"
              >
                {/* Glow Aura behind card */}
                <div
                  className="absolute -inset-1.5 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-25"
                  style={{
                    background: `radial-gradient(circle at center, ${project.accent} 0%, transparent 70%)`,
                  }}
                />

                {/* Main Card Container */}
                <div className="relative h-full w-full glass overflow-hidden rounded-2xl border border-white/5 bg-card transition-all hover:border-accent/20">
                  {/* Clickable Overlay Link */}
                  <a
                    href={"link" in project && project.link ? project.link : "#"}
                    target={"link" in project && project.link ? "_blank" : undefined}
                    rel={"link" in project && project.link ? "noopener noreferrer" : undefined}
                    className="absolute inset-0 z-30"
                    aria-label={`Δείτε το έργο ${project.title}`}
                  />

                  <div className="relative overflow-hidden">
                    {/* Live Badge */}
                    {"isLive" in project && project.isLive && (
                      <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Live Project
                      </div>
                    )}

                    <ProjectMockup
                      title={project.title}
                      gradient={project.gradient}
                      accent={project.accent}
                      image={"image" in project ? project.image : undefined}
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                        <ExternalLink size={20} />
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
