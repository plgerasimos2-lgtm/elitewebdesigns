"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:bg-blue-500",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    outline:
      "border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300",
    variants[variant],
    className,
    disabled && "opacity-50 cursor-not-allowed"
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
