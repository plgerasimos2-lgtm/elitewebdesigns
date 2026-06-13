"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-violet-500/5" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          tag="Κριτικές"
          title="Τι Λένε οι Πελάτες μας"
          subtitle="Η εμπιστοσύνη των πελατών μας είναι η καλύτερη μας διαφήμιση."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="glass rounded-3xl p-8 md:p-12">
            <Quote size={40} className="mb-6 text-accent/40" />

            <div className="relative min-h-[180px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-white md:text-xl">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>
                  <div className="mt-8">
                    <p className="font-display font-semibold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-secondary">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-accent" : "w-2 bg-white/20"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-accent/50 hover:bg-accent/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-accent/50 hover:bg-accent/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
