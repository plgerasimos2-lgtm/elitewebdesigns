"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { maintenancePlans } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function MaintenancePackages() {
  return (
    <section className="section-padding relative bg-card/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Συντήρηση"
          title="Πακέτα Διαχείρισης"
          subtitle="Κρατήστε την ιστοσελίδα σας ασφαλή, ενημερωμένη και optimized."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {maintenancePlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <RevealOnScroll key={plan.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass group h-full rounded-2xl p-8 transition-all hover:border-accent/30"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20 transition-all group-hover:bg-accent/20">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="mb-6 font-display text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={16} className="text-accent" />
                        <span className="text-sm text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
