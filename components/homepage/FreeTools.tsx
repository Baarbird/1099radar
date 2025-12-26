import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Users, Calculator, ArrowRight } from "lucide-react";

const tools = [
  {
    icon: CheckCircle2,
    title: "Compliance Check",
    description: "Answer a few questions to see what forms you need and identify compliance gaps.",
    href: "/tools/compliance-check",
    featured: true,
  },
  {
    icon: FileText,
    title: "1099-NEC vs 1099-MISC",
    description: "Not sure which form to use? This tool helps you decide based on payment type.",
    href: "/tools/nec-vs-misc",
    featured: false,
  },
  {
    icon: Users,
    title: "Contractor vs Employee",
    description: "Understand the key differences and classification factors for federal rules.",
    href: "/tools/classification",
    featured: false,
  },
  {
    icon: Calculator,
    title: "Rate & Tax Calculator",
    description: "Calculate contractor rates and understand tax implications.",
    href: "/tools/calculator",
    featured: false,
  },
];

export function FreeTools() {
  return (
    <section className="container px-6 py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
            Free Tools to Get Started
          </h2>
          <p className="text-xl text-muted-foreground">
            No signup required. Start using these tools right away.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className={`border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50 ${
                  tool.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                <CardHeader className={tool.featured ? "md:pr-8" : ""}>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-foreground/5">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-semibold mb-3">{tool.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={tool.featured ? "flex items-end" : ""}>
                  <Button asChild variant={tool.featured ? "default" : "outline"} size="lg" className="h-11">
                    <Link href={tool.href}>
                      Try it
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

