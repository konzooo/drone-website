import type { Transition, Variants } from "framer-motion";

// Cinematic easing - feels like a camera move
export const EASE_CINEMATIC = [0.25, 0.1, 0.25, 1] as const;

export const TRANSITION_SLOW: Transition = {
  duration: 1.2,
  ease: EASE_CINEMATIC,
};

export const TRANSITION_MEDIUM: Transition = {
  duration: 0.8,
  ease: EASE_CINEMATIC,
};

export const TRANSITION_FAST: Transition = {
  duration: 0.5,
  ease: EASE_CINEMATIC,
};

// Fade up animation (most common)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_MEDIUM,
  },
};

// Fade in (no movement)
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION_MEDIUM,
  },
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Slide from left
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_MEDIUM,
  },
};

// Viewport settings for whileInView
export const viewportOnce = { once: true, amount: 0.3 };
