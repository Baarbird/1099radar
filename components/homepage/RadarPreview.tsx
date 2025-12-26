import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radar, ArrowRight } from "lucide-react";

const recentUpdates = [
  {
    date: "2024-01-15",
    title: "IRS Updates 1099-NEC Filing Thresholds",
    description: "New guidance on when 1099-NEC forms are required for 2024 tax year.",
  },
  {
    date: "2024-01-10",
    title: "DOL Contractor Classification Rules",
    description: "Updated federal guidance on independent contractor classification standards.",
  },
];

export function RadarPreview() {
  return (
    <section className="bg-background container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground">
              Federal Updates Radar
            </h2>
            <p className="text-xl text-muted-foreground font-normal">
              Stay informed about changes to federal contractor rules and deadlines.
            </p>
          </div>
          <Radar className="h-12 w-12 text-primary/70 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
          {recentUpdates.map((update) => (
            <Card key={update.date} className="border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card group shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl font-bold text-foreground">{update.title}</CardTitle>
                  <time className="text-sm text-muted-foreground whitespace-nowrap ml-4 font-medium">
                    {new Date(update.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <CardDescription className="text-base leading-relaxed">{update.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="h-12 rounded-xl border-2 shadow-sm hover:shadow-md transition-shadow">
            <Link href="/radar">
              View all updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

