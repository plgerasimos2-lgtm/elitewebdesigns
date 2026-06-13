"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

function WebsiteMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg perspective-[1000px]"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 via-violet-500/20 to-accent/20 blur-2xl" />
      <div className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <div className="ml-4 h-5 flex-1 rounded-md bg-white/5" />
        </div>
        <div className="p-6">
          <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-accent/30 via-violet-500/20 to-transparent" />
          <div className="mb-3 h-4 w-3/4 rounded bg-white/10" />
          <div className="mb-2 h-3 w-full rounded bg-white/5" />
          <div className="mb-6 h-3 w-5/6 rounded bg-white/5" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded-lg bg-white/5" />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-6 top-1/4 hidden rounded-xl glass px-4 py-3 md:block"
      >
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-accent" />
          <span className="text-xs font-medium text-white">Premium Design</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 bottom-1/4 hidden rounded-xl glass px-4 py-3 md:block"
      >
        <span className="text-xs font-medium text-accent">98% Performance</span>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="animated-gradient-bg absolute inset-0" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </motion.div>

      <div className="animate-float absolute top-32 right-[15%] hidden h-20 w-20 rounded-2xl border border-white/5 bg-white/5 lg:block" />
      <div className="animate-float-delayed absolute bottom-40 left-[10%] hidden h-16 w-16 rounded-full border border-accent/20 bg-accent/5 lg:block" />
      <div className="absolute top-1/2 right-[5%] hidden h-32 w-32 rounded-full border border-violet-500/10 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                <Sparkles size={14} />
                Premium Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Επαγγελματικές Ιστοσελίδες που{" "}
              <span className="gradient-text">Αναπτύσσουν</span> την Επιχείρησή σας
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-secondary"
            >
              Σχεδιάζουμε σύγχρονες, γρήγορες και αποδοτικές ιστοσελίδες που βοηθούν
              τις επιχειρήσεις να αποκτήσουν περισσότερους πελάτες και να ξεχωρίσουν online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="#contact" variant="primary">
                Δωρεάν Προσφορά
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button href="#portfolio" variant="secondary">
                Δείτε τα Έργα μας
              </Button>
            </motion.div>
          </div>

          <WebsiteMockup />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-24 grid grid-cols-2 gap-8 border-t border-white/5 pt-12 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
