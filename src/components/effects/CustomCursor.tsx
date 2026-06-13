"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(isTouchDevice);
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, [data-cursor='hover']");
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
            x: isHovering ? -24 : -6,
            y: isHovering ? -24 : -6,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="h-1 w-1 -translate-x-0.5 -translate-y-0.5 rounded-full bg-accent" />
      </motion.div>
    </>
  );
}
