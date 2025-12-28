"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RiskDialProps {
  score: number; // 0-100
  size?: number;
  className?: string;
}

export function RiskDial({ score, size = 200, className }: RiskDialProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Animate score from 0 to actual score
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score]);

  const getColor = (value: number) => {
    if (value <= 30) return "#8c7352"; // earthy bronze
    if (value <= 60) return "#d97706"; // amber
    return "#991b1b"; // deep clay red
  };

  const getLevel = (value: number): "low" | "medium" | "high" => {
    if (value <= 30) return "low";
    if (value <= 60) return "medium";
    return "high";
  };

  const radius = size * 0.35;
  const strokeWidth = size * 0.08;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  const color = getColor(animatedScore);
  const level = getLevel(animatedScore);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/20"
        />
        {/* Score arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300 ease-out"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`,
          }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold" style={{ color }}>
          {Math.round(animatedScore)}
        </div>
        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-1">
          {level} Risk
        </div>
        <div className="text-xs text-muted-foreground mt-1">out of 100</div>
      </div>
    </div>
  );
}

