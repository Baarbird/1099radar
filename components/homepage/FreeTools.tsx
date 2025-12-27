import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Users, Calculator, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { UndrawIllustration } from "@/components/shared/UndrawIllustration";

const tools = [
  {
    icon: CheckCircle2,
    title: "Compliance Check",
    description: "Answer a few questions to see what forms you need and identify compliance gaps.",
    href: "/tools/compliance-check",
    featured: true,
    illustration: "checklist" as const,
  },
  {
    icon: FileText,
    title: "1099-NEC vs 1099-MISC",
    description: "Not sure which form to use? This tool helps you decide based on payment type.",
    href: "/tools/nec-vs-misc",
    featured: false,
    illustration: "documents" as const,
  },
  {
    icon: Users,
    title: "Contractor vs Employee",
    description: "Understand the key differences and classification factors for federal rules.",
    href: "/tools/classification",
    featured: false,
    illustration: "team" as const,
  },
  {
    icon: Calculator,
    title: "Rate & Tax Calculator",
    description: "Calculate contractor rates and understand tax implications.",
    href: "/tools/calculator",
    featured: false,
    illustration: "calculator" as const,
  },
];

export function FreeTools() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right transform" />
      <div className="container relative px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Free Tools to <span className="text-primary">Get Started</span>
            </h2>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">
              No signup required. Start using these tools right away to ensure your business stays compliant.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.title}
                  className={`border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl bg-card/90 backdrop-blur-sm group shadow-md overflow-hidden flex flex-col ${
                    tool.featured ? "md:col-span-2 md:grid md:grid-cols-2 gap-0" : ""
                  }`}
                >
                  <div className={cn(
                    "relative flex items-center justify-center p-8 bg-muted/30",
                    tool.featured ? "h-full min-h-[300px]" : "h-64"
                  )}>
                    <UndrawIllustration 
                      name={tool.illustration}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col p-8 lg:p-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{tool.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {tool.description}
                    </CardDescription>
                    <div className="mt-auto">
                      <Button asChild variant={tool.featured ? "default" : "outline"} size="lg" className="h-12 rounded-2xl shadow-sm hover:shadow-md transition-all px-8">
                        <Link href={tool.href}>
                          Launch Tool
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

