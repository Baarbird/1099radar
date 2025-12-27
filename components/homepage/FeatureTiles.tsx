import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Shield, Clock, BookOpen, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Federal Focus",
    description: "Clear guidance on federal contractor rules, no state complexity.",
    image: "https://assets.manypixels.co/illustrations/searching",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Stay informed about changes to federal guidance and deadlines.",
    image: "https://assets.manypixels.co/illustrations/alarm",
  },
  {
    icon: BookOpen,
    title: "Clear Guidance",
    description: "Plain English explanations, not overwhelming legalese.",
    image: "https://assets.manypixels.co/illustrations/learning",
  },
  {
    icon: Wrench,
    title: "Free Tools",
    description: "Interactive tools to check compliance and make decisions.",
    image: "https://assets.manypixels.co/illustrations/checklist",
  },
];

export function FeatureTiles() {
  return (
    <section className="bg-transparent container px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const cardElement = (
            <Card 
              key={feature.title} 
              className={cn(
                "border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm group shadow-sm overflow-hidden h-full flex flex-col",
                index % 2 === 0 ? "md:translate-y-4" : "md:-translate-y-4"
              )}
            >
              <div className="relative h-64 w-full p-8 flex items-center justify-center bg-muted/20">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader className="flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-foreground">{feature.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );

          if (feature.title === "Federal Focus") {
            return (
              <Link key={feature.title} href="/learn/federal-focus" className="block h-full">
                {cardElement}
              </Link>
            );
          }

          return <div key={feature.title} className="h-full">{cardElement}</div>;
        })}
      </div>
    </section>
  );
}

