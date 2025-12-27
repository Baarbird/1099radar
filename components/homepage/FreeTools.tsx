import Link from "next/link";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  },
  {
    icon: FileText,
    title: "1099-NEC vs 1099-MISC",
    description: "Not sure which form to use? This tool helps you decide based on payment type.",
    href: "/tools/nec-vs-misc",
    featured: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    icon: Users,
    title: "Contractor vs Employee",
    description: "Understand the key differences and classification factors for federal rules.",
    href: "/tools/classification",
    featured: false,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    icon: Calculator,
    title: "Rate & Tax Calculator",
    description: "Calculate contractor rates and understand tax implications.",
    href: "/tools/calculator",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export function FreeTools() {
  return (
    <section className="bg-muted/30 container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
            Free Tools to Get Started
          </h2>
          <p className="text-xl text-muted-foreground font-normal">
            No signup required. Start using these tools right away.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className={`border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card group shadow-md overflow-hidden ${
                  tool.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                {tool.featured ? (
                  <>
                    <div className="relative h-full min-h-[300px]">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <CardHeader>
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold mb-4 text-foreground">{tool.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-end">
                        <Button asChild variant="default" size="lg" className="h-12 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <Link href={tool.href}>
                            Try it
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </CardContent>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-48 w-full">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-4 text-foreground">{tool.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="outline" size="lg" className="h-12 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <Link href={tool.href}>
                          Try it
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

