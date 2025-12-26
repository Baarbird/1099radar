import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Federal Focus",
    description: "Clear guidance on federal contractor rules, no state complexity.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Stay informed about changes to federal guidance and deadlines.",
  },
  {
    icon: BookOpen,
    title: "Clear Guidance",
    description: "Plain English explanations, not overwhelming legalese.",
  },
  {
    icon: Wrench,
    title: "Free Tools",
    description: "Interactive tools to check compliance and make decisions.",
  },
];

export function FeatureTiles() {
  return (
    <section className="container px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={feature.title} 
              className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50"
            >
              <CardHeader>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

