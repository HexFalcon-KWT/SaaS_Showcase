"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type ShinyButtonProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export function ShinyButton({
  children,
  className,
  ...props
}: ShinyButtonProps) {
  return (
    <motion.button
      className={cn(
        "group relative inline-flex flex-nowrap items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 font-medium text-white shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-purple-500/50",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="absolute inset-0 flex h-full w-full">
        <span className="absolute left-0 h-full w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
