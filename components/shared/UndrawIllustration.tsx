"use client";

import { cn } from "@/lib/utils";

// Map illustration names to local SVG files
// Using custom downloaded SVGs from unDraw.co
const illustrationPaths: Record<string, string> = {
  // Your custom downloaded illustrations
  "searching": "/illustrations/idea-sketching.svg",
  "alarm": "/illustrations/stepping-up.svg",
  "learning": "/illustrations/online-meeting.svg",
  "checklist": "/illustrations/investing.svg",
  "documents": "/illustrations/large-language-models.svg",
  "team": "/illustrations/online-meeting.svg",
  "calculator": "/illustrations/investing.svg",
  "calendar": "/illustrations/stepping-up.svg",
  "decide": "/illustrations/too-many-options.svg",
  "warning": "/illustrations/too-many-options.svg",
  "radar": "/illustrations/idea-sketching.svg",
  
  // Direct access to all illustrations
  "idea-sketching": "/illustrations/idea-sketching.svg",
  "investing": "/illustrations/investing.svg",
  "large-language-models": "/illustrations/large-language-models.svg",
  "online-meeting": "/illustrations/online-meeting.svg",
  "stepping-up": "/illustrations/stepping-up.svg",
  "too-many-options": "/illustrations/too-many-options.svg",
  "taking-notes": "/illustrations/taking-notes.svg",
};

const fallbackPath = "/illustrations/idea-sketching.svg";

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
