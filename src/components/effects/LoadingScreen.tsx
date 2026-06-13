"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse [animation-delay:150ms]" />
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse [animation-delay:300ms]" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              <span className="gradient-text">Elite Web Designs</span>
            </h1>
            <p className="mt-2 text-sm text-secondary">Premium Digital Agency</p>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
