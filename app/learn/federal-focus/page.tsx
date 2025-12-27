"use client";

import { useState } from "react";
import { Sidebar } from "@/components/federal-focus/Sidebar";
import { ContentArea } from "@/components/federal-focus/ContentArea";
import { FederalTopic } from "@/lib/federal-rules-content";

export default function FederalFocusPage() {
  const [selectedTopic, setSelectedTopic] = useState<FederalTopic>("classification");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <Sidebar selectedTopic={selectedTopic} onTopicSelect={setSelectedTopic} />
      <ContentArea topic={selectedTopic} />
    </div>
  );
}

