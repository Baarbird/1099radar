"use client";

import { cn } from "@/lib/utils";

// Map illustration names to local SVG files in /public/illustrations/
// To add more: download from undraw.co, save to public/illustrations/, add to this map
const illustrationPaths: Record<string, string> = {
  "taking-notes": "/illustrations/taking-notes.svg",
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
};

// Fallback to taking-notes if illustration doesn't exist
const fallbackPath = "/illustrations/taking-notes.svg";

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
