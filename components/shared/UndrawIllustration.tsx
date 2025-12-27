"use client";

import { cn } from "@/lib/utils";

// Map illustration names to local SVG files from undraw-svg-collection
const illustrationPaths: Record<string, string> = {
  "searching": "/illustrations/searching.svg",
  "alarm": "/illustrations/alarm.svg",
  "learning": "/illustrations/learning.svg",
  "checklist": "/illustrations/checklist.svg",
  "documents": "/illustrations/documents.svg",
  "team": "/illustrations/team.svg",
  "calculator": "/illustrations/calculator.svg",
  "calendar": "/illustrations/calendar.svg",
  "decide": "/illustrations/decide.svg",
  "warning": "/illustrations/warning.svg",
  "radar": "/illustrations/radar.svg",
  "taking-notes": "/illustrations/taking-notes.svg",
};

const fallbackPath = "/illustrations/searching.svg";

interface UndrawIllustrationProps {
  name: keyof typeof illustrationPaths | string;
  className?: string;
  alt?: string;
}

export function UndrawIllustration({ name, className, alt }: UndrawIllustrationProps) {
  const src = illustrationPaths[name] || fallbackPath;
  
  return (
    <img 
      src={src}
      alt={alt || `${name} illustration`}
      className={cn("w-full h-auto", className)}
      loading="lazy"
    />
  );
}
