"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FederalTopic, federalRulesContent } from "@/lib/federal-rules-content";

interface ContentAreaProps {
  topic: FederalTopic;
}

export function ContentArea({ topic }: ContentAreaProps) {
  const content = federalRulesContent[topic];

  return (
    <div className="w-full md:w-[90%] md:ml-[10%] min-h-screen bg-background pt-24 md:pt-0">
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto space-y-8">
          {/* Header with Image */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="w-full max-w-md h-auto"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80";
                }}
              />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Introduction */}
          <Card className="border border-border/40 bg-card/50">
            <CardContent className="pt-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                {content.content.introduction}
              </p>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-6">
            {content.content.sections.map((section, index) => (
              <Card 
                key={index} 
                className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {section.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

