"use client";

import { cn } from "@/lib/utils";

// All illustrations use the same file for now
// To add more: download from undraw.co, save to public/illustrations/, update this map
const illustrationPaths: Record<string, string> = {
  "taking-notes": "/illustrations/taking-notes.svg",
  "searching": "/illustrations/taking-notes.svg",
  "alarm": "/illustrations/taking-notes.svg",
  "learning": "/illustrations/taking-notes.svg",
  "checklist": "/illustrations/taking-notes.svg",
  "documents": "/illustrations/taking-notes.svg",
  "team": "/illustrations/taking-notes.svg",
  "calculator": "/illustrations/taking-notes.svg",
  "calendar": "/illustrations/taking-notes.svg",
  "decide": "/illustrations/taking-notes.svg",
  "warning": "/illustrations/taking-notes.svg",
  "radar": "/illustrations/taking-notes.svg",
};

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
