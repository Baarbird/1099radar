import React from "react";
import { cn } from "@/lib/utils";

interface UndrawIllustrationProps {
  name: "searching" | "alarm" | "learning" | "checklist" | "documents" | "team" | "calculator" | "calendar" | "decide" | "warning" | "radar";
  className?: string;
}

const illustrations: Record<string, React.ReactElement> = {
  searching: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with magnifying glass */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Magnifying glass */}
      <circle cx="500" cy="180" r="40" stroke="#6366f1" strokeWidth="6" fill="none" strokeOpacity="0.4"/>
      <line x1="530" y1="210" x2="560" y2="240" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4"/>
      {/* Documents */}
      <rect x="450" y="120" width="100" height="70" rx="6" fill="#6366f1" fillOpacity="0.1" transform="rotate(20 500 155)"/>
      <rect x="460" y="130" width="100" height="70" rx="6" fill="#6366f1" fillOpacity="0.15" transform="rotate(15 510 165)"/>
    </svg>
  ),
  alarm: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with alarm clock */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Alarm clock */}
      <circle cx="500" cy="180" r="50" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="4"/>
      <line x1="500" y1="180" x2="500" y2="160" stroke="#6366f1" strokeWidth="4" strokeLinecap="round"/>
      <line x1="500" y1="180" x2="515" y2="180" stroke="#6366f1" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="500" cy="180" r="3" fill="#6366f1"/>
      {/* Bell on top */}
      <path d="M 500 130 Q 490 120 480 130 Q 490 125 500 130" stroke="#6366f1" strokeWidth="4" fill="none"/>
    </svg>
  ),
  learning: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person reading/learning */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Book */}
      <rect x="480" y="150" width="80" height="100" rx="4" fill="#6366f1" fillOpacity="0.2"/>
      <line x1="520" y1="150" x2="520" y2="250" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.4"/>
      {/* Lightbulb */}
      <circle cx="550" cy="120" r="25" fill="#6366f1" fillOpacity="0.2"/>
      <rect x="545" y="145" width="10" height="15" fill="#6366f1" fillOpacity="0.2"/>
    </svg>
  ),
  checklist: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with checklist */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Checklist */}
      <rect x="480" y="140" width="120" height="140" rx="8" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.3"/>
      {/* Checkmarks */}
      <circle cx="495" cy="165" r="8" fill="#6366f1" fillOpacity="0.3"/>
      <path d="M 490 165 L 493 168 L 500 161" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="495" cy="200" r="8" fill="#6366f1" fillOpacity="0.3"/>
      <path d="M 490 200 L 493 203 L 500 196" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="495" cy="235" r="8" fill="#6366f1" fillOpacity="0.2"/>
    </svg>
  ),
  documents: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with documents */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Stack of documents */}
      <rect x="480" y="130" width="100" height="130" rx="6" fill="#6366f1" fillOpacity="0.15" transform="rotate(-5 530 195)"/>
      <rect x="490" y="140" width="100" height="130" rx="6" fill="#6366f1" fillOpacity="0.2" transform="rotate(-2 540 205)"/>
      <rect x="500" y="150" width="100" height="130" rx="6" fill="#6366f1" fillOpacity="0.25"/>
      <line x1="520" y1="150" x2="520" y2="280" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.3"/>
      <line x1="550" y1="150" x2="550" y2="280" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.3"/>
    </svg>
  ),
  team: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Multiple people */}
      <circle cx="300" cy="250" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="500" cy="250" r="180" fill="#6366f1" fillOpacity="0.08"/>
      {/* Person 1 */}
      <circle cx="300" cy="150" r="40" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="300" cy="330" rx="60" ry="80" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 250 250 Q 300 290 350 270" stroke="#6366f1" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Person 2 */}
      <circle cx="500" cy="150" r="40" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="500" cy="330" rx="60" ry="80" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 450 250 Q 500 290 550 270" stroke="#6366f1" strokeWidth="5" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Connection line */}
      <path d="M 350 200 Q 400 180 450 200" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="5,5" strokeOpacity="0.2"/>
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with calculator */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Calculator */}
      <rect x="480" y="140" width="140" height="180" rx="8" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.3"/>
      <rect x="495" y="160" width="110" height="35" rx="4" fill="#6366f1" fillOpacity="0.3"/>
      {/* Buttons */}
      <circle cx="510" cy="220" r="12" fill="#6366f1" fillOpacity="0.25"/>
      <circle cx="540" cy="220" r="12" fill="#6366f1" fillOpacity="0.25"/>
      <circle cx="570" cy="220" r="12" fill="#6366f1" fillOpacity="0.25"/>
      <circle cx="510" cy="250" r="12" fill="#6366f1" fillOpacity="0.25"/>
      <circle cx="540" cy="250" r="12" fill="#6366f1" fillOpacity="0.25"/>
      <circle cx="570" cy="250" r="12" fill="#6366f1" fillOpacity="0.25"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with calendar */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Calendar */}
      <rect x="480" y="130" width="160" height="180" rx="8" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.3"/>
      <rect x="480" y="130" width="160" height="40" rx="8" fill="#6366f1" fillOpacity="0.25"/>
      {/* Calendar grid */}
      <line x1="520" y1="170" x2="520" y2="310" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2"/>
      <line x1="560" y1="170" x2="560" y2="310" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2"/>
      <line x1="600" y1="170" x2="600" y2="310" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2"/>
      <line x1="480" y1="210" x2="640" y2="210" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2"/>
      <line x1="480" y1="250" x2="640" y2="250" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2"/>
      {/* Highlighted date */}
      <circle cx="540" cy="230" r="15" fill="#6366f1" fillOpacity="0.3"/>
    </svg>
  ),
  decide: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person deciding/thinking */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Thought bubbles */}
      <circle cx="500" cy="120" r="25" fill="#6366f1" fillOpacity="0.2"/>
      <circle cx="530" cy="100" r="15" fill="#6366f1" fillOpacity="0.15"/>
      <circle cx="550" cy="85" r="10" fill="#6366f1" fillOpacity="0.1"/>
      {/* Options/arrows */}
      <path d="M 480 180 L 500 200 M 500 200 L 520 180" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
      <path d="M 520 180 L 540 200 M 540 200 L 560 180" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with warning sign */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Warning triangle */}
      <path d="M 500 140 L 480 200 L 520 200 Z" fill="#6366f1" fillOpacity="0.25" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.4"/>
      <path d="M 500 165 L 495 180 L 505 180 Z" fill="#6366f1" fillOpacity="0.4"/>
      <circle cx="500" cy="175" r="3" fill="#6366f1"/>
    </svg>
  ),
  radar: (
    <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person with radar */}
      <circle cx="400" cy="300" r="180" fill="#6366f1" fillOpacity="0.08"/>
      <circle cx="350" cy="200" r="50" fill="#6366f1" fillOpacity="0.15"/>
      <ellipse cx="350" cy="380" rx="70" ry="90" fill="#6366f1" fillOpacity="0.12"/>
      <path d="M 300 280 Q 350 320 400 300 Q 450 280 500 300" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeOpacity="0.3"/>
      {/* Radar screen */}
      <circle cx="500" cy="180" r="60" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="3" strokeOpacity="0.3"/>
      <circle cx="500" cy="180" r="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="3,3"/>
      <circle cx="500" cy="180" r="20" fill="none" stroke="#6366f1" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="3,3"/>
      {/* Radar sweep */}
      <path d="M 500 180 L 500 120" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.4"/>
      <circle cx="500" cy="180" r="3" fill="#6366f1" fillOpacity="0.5"/>
      {/* Blips */}
      <circle cx="520" cy="160" r="4" fill="#6366f1" fillOpacity="0.6"/>
      <circle cx="480" cy="200" r="4" fill="#6366f1" fillOpacity="0.6"/>
    </svg>
  ),
};

export function UndrawIllustration({ name, className }: UndrawIllustrationProps) {
  const illustration = illustrations[name] || illustrations.searching;
  
  return (
    <div className={cn("w-full h-full flex items-center justify-center", className)}>
      {illustration}
    </div>
  );
}

