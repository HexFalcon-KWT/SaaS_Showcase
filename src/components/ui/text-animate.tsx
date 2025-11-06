"use client";

import { ElementType, memo } from "react";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import { cn } from "@/lib/utils";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  as?: ElementType;
  animation?: AnimationVariant;
  by?: AnimationType;
  delay?: number;
  duration?: number;
  stagger?: number;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blurIn: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  },
  blurInUp: {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  },
  blurInDown: {
    hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  scaleUp: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  scaleDown: {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
};

export const TextAnimate = memo(
  ({
    children,
    className,
    as: Component = "p",
    animation = "fadeIn",
    by = "word",
    delay = 0,
    duration = 0.5,
    stagger = 0.05,
    ...props
  }: TextAnimateProps) => {
    const selectedVariants = variants[animation];
    const MotionComponent = motion(Component);

    const segments =
      by === "character"
        ? children.split("")
        : by === "word"
        ? children.split(" ")
        : [children];

    return (
      <MotionComponent
        className={cn("inline-block", className)}
        initial="hidden"
        animate="visible"
        {...props}
      >
        <AnimatePresence>
          {segments.map((segment, i) => (
            <motion.span
              key={`${segment}-${i}`}
              className={by === "word" ? "inline-block mr-[0.25em]" : "inline-block"}
              variants={selectedVariants}
              transition={{
                duration,
                delay: delay + i * stagger,
                ease: "easeOut",
              }}
            >
              {segment}
              {by === "word" && i !== segments.length - 1 && " "}
            </motion.span>
          ))}
        </AnimatePresence>
      </MotionComponent>
    );
  }
);

TextAnimate.displayName = "TextAnimate";
