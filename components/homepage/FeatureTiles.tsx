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
    <section className="bg-background container px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={feature.title} 
              className="border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card group shadow-sm"
            >
              <CardHeader>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-foreground">{feature.title}</CardTitle>
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

