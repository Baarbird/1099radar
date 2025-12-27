import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Shield, Clock, BookOpen, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Federal Focus",
    description: "Clear guidance on federal contractor rules, no state complexity.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Stay informed about changes to federal guidance and deadlines.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    icon: BookOpen,
    title: "Clear Guidance",
    description: "Plain English explanations, not overwhelming legalese.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Free Tools",
    description: "Interactive tools to check compliance and make decisions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  },
];

export function FeatureTiles() {
  return (
    <section className="bg-background container px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          const cardElement = (
            <Card 
              key={feature.title} 
              className="border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card group shadow-sm overflow-hidden h-full cursor-pointer"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                />
              </div>
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

          if (feature.title === "Federal Focus") {
            return (
              <Link key={feature.title} href="/learn/federal-focus" className="block h-full">
                {cardElement}
              </Link>
            );
          }

          return cardElement;
        })}
      </div>
    </section>
  );
}

