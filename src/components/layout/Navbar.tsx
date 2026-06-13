"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Elite Web Designs Logo"
            className="h-10 w-10 rounded-lg object-contain transition-all group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Elite Web Designs
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors hover:text-white"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="px-6 py-2.5 text-xs">
            Δωρεάν Προσφορά
          </Button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden lg:hidden"
      >
        <div className="glass mx-4 mt-2 rounded-2xl p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm text-secondary transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="mt-4 w-full text-xs">
            Δωρεάν Προσφορά
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
}
