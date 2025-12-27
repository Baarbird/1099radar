"use client";

import { Button } from "@/components/ui/button";
import { FederalTopic } from "@/lib/federal-rules-content";
import { Users, FileText, Calendar, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedTopic: FederalTopic;
  onTopicSelect: (topic: FederalTopic) => void;
}

const sidebarTopics: Array<{
  id: FederalTopic;
  label: string;
  icon: typeof Users;
}> = [
  { id: "classification", label: "Classification", icon: Users },
  { id: "forms", label: "Forms", icon: FileText },
  { id: "deadlines", label: "Deadlines", icon: Calendar },
  { id: "penalties", label: "Penalties", icon: AlertTriangle },
  { id: "requirements", label: "Requirements", icon: CheckCircle2 },
];

export function Sidebar({ selectedTopic, onTopicSelect }: SidebarProps) {
  return (
    <aside className="w-full md:w-1/5 fixed md:sticky top-20 left-0 h-auto md:h-[calc(100vh-5rem)] bg-card border-b md:border-b-0 md:border-r border-border/50 overflow-x-auto md:overflow-y-auto z-40">
      <div className="p-4 md:p-6 flex md:flex-col space-x-3 md:space-x-0 md:space-y-3">
        {sidebarTopics.map((topic) => {
          const Icon = topic.icon;
          const isSelected = selectedTopic === topic.id;
          
          return (
            <Button
              key={topic.id}
              onClick={() => onTopicSelect(topic.id)}
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "shrink-0 md:w-full justify-start h-auto py-3 md:py-4 px-4 text-left whitespace-nowrap",
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-muted/50"
              )}
            >
              <Icon className="h-5 w-5 mr-3 shrink-0" />
              <span className="font-semibold text-sm">{topic.label}</span>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

