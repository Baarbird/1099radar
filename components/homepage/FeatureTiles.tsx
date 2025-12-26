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
    <section className="container px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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

