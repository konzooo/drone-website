"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_CINEMATIC } from "@/lib/animations";

const PHRASES = [
  { lead: "Capture moments", payoff: "add perspective." },
  { lead: "Tell a story", payoff: "add perspective." },
  { lead: "Define the space", payoff: "add perspective." },
];

const HOLD_DURATION = 2500; // ms each text is visible before transitioning
const TRANSITION_DURATION = 1.2; // slower, softer dissolve

const HERO_VIDEO_DESKTOP = "/videos/Drone Website Banner (full HD).mp4";
const HERO_VIDEO_MOBILE = "/videos/hero-mobile.mp4";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [showPayoff, setShowPayoff] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideoSrc(
      window.innerWidth < 768 ? HERO_VIDEO_MOBILE : HERO_VIDEO_DESKTOP
    );
  }, []);

  // Force autoplay on mobile — iOS often blocks autoplay until interaction
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Try immediately when video can play
    video.addEventListener("canplay", tryPlay);
    // Also try on first user interaction (touch/scroll)
    document.addEventListener("touchstart", tryPlay, { once: true });
    document.addEventListener("scroll", tryPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, [videoSrc]);

  useEffect(() => {
    // Initial delay before starting the cycle
    const startDelay = setTimeout(() => {
      setShowPayoff(false);
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    // Equal timing: lead holds, then payoff holds, then next phrase
    setShowPayoff(false);

    const payoffTimer = setTimeout(() => {
      setShowPayoff(true);
    }, HOLD_DURATION);

    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, HOLD_DURATION * 2);

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
        {videoSrc && (
          <video
            ref={videoRef}
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero poster.png"
            className="w-full h-full object-cover contrast-[1.05] saturate-[1.1]"
            src={videoSrc}
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated text */}
      <div className="relative z-10 text-center px-6 h-12 md:h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!showPayoff ? (
            <motion.h1
              key={`lead-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: EASE_CINEMATIC,
              }}
              className="text-[clamp(1.25rem,3vw,2rem)] tracking-[0.15em] text-foreground/70 leading-none"
              style={{ fontFamily: "'Italiana', serif" }}
            >
              {current.lead}
            </motion.h1>
          ) : (
            <motion.h1
              key={`payoff-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: EASE_CINEMATIC,
              }}
              className="text-[clamp(1.25rem,3vw,2rem)] tracking-[0.15em] text-foreground leading-none"
              style={{ fontFamily: "'Italiana', serif" }}
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
