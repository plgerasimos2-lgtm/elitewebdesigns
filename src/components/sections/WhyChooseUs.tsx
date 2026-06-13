"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhyChooseUs() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Γιατί εμάς"
          title="Γιατί να μας Επιλέξετε"
          subtitle="Συνδυάζουμε τεχνολογία, design και στρατηγική για αποτελέσματα που μετράνε."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group glass h-full rounded-2xl p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-3 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>
                <div className="mt-6 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
