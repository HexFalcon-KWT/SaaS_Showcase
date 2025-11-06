"use client"

import { cn } from "@/lib/utils"

interface GridPatternProps {
  className?: string
  size?: "sm" | "md" | "lg"
  opacity?: number
}

export function GridPattern({
  className,
  size = "md",
  opacity = 0.1
}: GridPatternProps) {
  const sizeMap = {
    sm: "16",
    md: "32",
    lg: "64"
  }

  const gridSize = sizeMap[size]

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke="currentColor"
              strokeOpacity={opacity}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
