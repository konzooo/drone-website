"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/animations";

const PHRASES = [
  { lead: "Capture moments", payoff: "add perspective." },
  { lead: "Tell a story", payoff: "add perspective." },
  { lead: "Define the space", payoff: "add perspective." },
];

const CYCLE_DURATION = 4000; // ms per phrase
const TRANSITION_DURATION = 0.8;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showPayoff, setShowPayoff] = useState(false);

  useEffect(() => {
    // Initial delay before starting the cycle
    const startDelay = setTimeout(() => {
      setShowPayoff(false);
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    // Show lead first, then after a pause, dissolve to payoff
    setShowPayoff(false);

    const payoffTimer = setTimeout(() => {
      setShowPayoff(true);
    }, CYCLE_DURATION * 0.45);

    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, CYCLE_DURATION);

    return () => {
      clearTimeout(payoffTimer);
      clearTimeout(nextTimer);
    };
  }, [index]);

  const current = PHRASES[index];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover contrast-[1.05] saturate-[1.1]"
        >
          <source
            src="/videos/Drone Website Banner (full HD).mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated text */}
      <div className="relative z-10 text-center px-6 h-[clamp(4rem,12vw,10rem)] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showPayoff ? (
            <motion.h1
              key={`lead-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: EASE_CINEMATIC,
              }}
              className="font-serif text-[clamp(2rem,5.5vw,4.5rem)] font-light tracking-[0.08em] text-foreground/80 leading-none"
            >
              {current.lead}
            </motion.h1>
          ) : (
            <motion.h1
              key={`payoff-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: EASE_CINEMATIC,
              }}
              className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-light tracking-[0.12em] text-foreground leading-none"
            >
              {current.payoff}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-foreground-secondary to-transparent"
        />
      </motion.div>
    </section>
  );
}
