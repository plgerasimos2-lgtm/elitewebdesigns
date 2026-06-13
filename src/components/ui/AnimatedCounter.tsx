"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white md:text-5xl">
        <motion.span>{display}</motion.span>
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-secondary">{label}</p>
    </div>
  );
}
