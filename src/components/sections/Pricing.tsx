"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-violet-500/5" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          tag="Πακέτα"
          title="Πακέτα Ιστοσελίδων"
          subtitle="Επιλέξτε το κατάλληλο πακέτο για την επιχείρησή σας"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8 transition-all",
                  plan.highlighted
                    ? "glass border-accent/50 shadow-xl shadow-accent/10 ring-1 ring-accent/30"
                    : "glass hover:border-white/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                      <Star size={12} fill="currentColor" />
                      Πιο Δημοφιλές
                    </span>
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                
                {"description" in plan && (
                  <p className="mt-2 text-sm text-secondary min-h-[40px]">
                    {plan.description}
                  </p>
                )}

                {"price" in plan && (
                  <div className="mt-4 flex items-baseline">
                    <span className="font-display text-3xl font-extrabold text-white">
                      {plan.price}
                    </span>
                  </div>
                )}

                <div className="my-6 h-px bg-white/10" />

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {"note" in plan && plan.note && (
                  <p className="mb-6 text-sm italic text-secondary/60">
                    {plan.note}
                  </p>
                )}

                <Button
                  href="#contact"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  Ζητήστε Προσφορά
                </Button>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
