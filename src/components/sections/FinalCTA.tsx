"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-violet-500/10 to-accent/5" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <RevealOnScroll>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Έτοιμοι να Αναπτύξετε την Επιχείρησή σας Online;
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Ζητήστε σήμερα δωρεάν προσφορά και αποκτήστε μια επαγγελματική ιστοσελίδα
            που ξεχωρίζει.
          </p>
          <div className="mt-10">
            <Button href="#contact" variant="primary" className="text-base">
              Ζητήστε Δωρεάν Προσφορά
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
