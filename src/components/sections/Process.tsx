"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding relative bg-card/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Διαδικασία"
          title="Διαδικασία Συνεργασίας"
          subtitle="Ένας ξεκάθαρος, οργανωμένος τρόπος εργασίας από την ιδέα μέχρι την παράδοση."
        />

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-accent to-violet-500"
              style={{ height: lineHeight }}
            />
          </div>

          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.step} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex items-center gap-8 md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                  <span className="text-sm font-bold text-accent">{step.step}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-bold text-accent shadow-lg shadow-accent/20 md:left-1/2"
                >
                  {step.step}
                </motion.div>

                <div className="hidden flex-1 md:block" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
