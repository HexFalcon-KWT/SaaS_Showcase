"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export function TypingAnimation({
  text,
  duration = 50,
  className,
  as: Component = "p",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, duration, text]);

  const Tag = Component as any;

  return (
    <Tag className={cn("font-display text-center", className)}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </Tag>
  );
}
