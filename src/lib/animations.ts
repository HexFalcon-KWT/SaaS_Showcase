import { Variants } from "motion/react";

// Scroll-triggered animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Container variants for stagger animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3 },
};

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
  transition: { duration: 0.3 },
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

// Viewport animation options
export const viewportConfig = {
  once: true,
  amount: 0.3,
};

export const viewportConfigOnce = {
  once: true,
  amount: 0.1,
};

// Spring configurations
export const springConfig = {
  type: "spring",
  damping: 30,
  stiffness: 300,
};

export const smoothSpring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
};
