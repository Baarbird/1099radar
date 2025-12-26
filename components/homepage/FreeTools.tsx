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
    <section className="container px-4 py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Free Tools to Get Started
          </h2>
          <p className="text-lg text-muted-foreground">
            No signup required. Start using these tools right away.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className={`border-2 hover:border-primary/50 transition-colors ${
                  tool.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                <CardHeader className={tool.featured ? "md:pr-8" : ""}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{tool.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className={tool.featured ? "flex items-end" : ""}>
                  <Button asChild variant={tool.featured ? "default" : "outline"}>
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

