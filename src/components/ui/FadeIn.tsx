"use client";

import { motion } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/animations";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: EASE_CINEMATIC }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
