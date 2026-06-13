"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative bg-card/30">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          tag="FAQ"
          title="Συχνές Ερωτήσεις"
          subtitle="Απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τις υπηρεσίες μας."
        />

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <RevealOnScroll key={item.question} delay={index * 0.05}>
              <div className="glass overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  data-cursor="hover"
                >
                  <span className="pr-4 font-display text-base font-semibold text-white md:text-lg">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="shrink-0 text-accent" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-white/5 px-6 pb-6 pt-2 text-sm leading-relaxed text-secondary">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
