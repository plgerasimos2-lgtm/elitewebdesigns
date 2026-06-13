"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  return (
    <section id="services" className="section-padding relative bg-card/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          tag="Υπηρεσίες"
          title="Τι Προσφέρουμε"
          subtitle="Ολοκληρωμένες λύσεις web design για κάθε επιχειρηματική ανάγκη."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={service.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group glass relative overflow-hidden rounded-2xl p-8 transition-all hover:border-accent/30"
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />
                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20 group-hover:ring-accent/40">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-secondary">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all group-hover:opacity-100">
                      Μάθετε περισσότερα
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
