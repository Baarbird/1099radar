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
    <div className="w-full md:w-[80%] md:ml-[20%] min-h-screen bg-background pt-24 md:pt-0">
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="w-full max-w-6xl mx-auto space-y-16">
          {/* Header with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-tight">
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
                {content.description}
              </p>
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                  {content.content.introduction}
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last p-8 bg-muted/20 rounded-[40px]">
              <img 
                src={content.imageUrl} 
                alt={content.title} 
                className="w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_searching_re_8v0v.svg";
                }}
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {content.content.sections.map((section, index) => (
              <Card 
                key={index} 
                className={cn(
                  "border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-xl bg-card/50 backdrop-blur-sm group overflow-hidden flex flex-col",
                  index % 3 === 0 ? "md:col-span-2" : ""
                )}
              >
                <div className="h-1.5 w-full bg-primary/10 group-hover:bg-primary transition-colors" />
                <CardHeader className="p-8 lg:p-10">
                  <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {section.heading}
                  </CardTitle>
                  <CardContent className="p-0">
                    <p className="text-base text-muted-foreground leading-relaxed font-normal mb-6">
                      {section.text}
                    </p>
                    {section.bullets && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 text-sm font-medium text-muted-foreground bg-muted/30 p-3 rounded-xl border border-border/20">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

