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
    <section className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-4">
              Federal Updates Radar
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed about changes to federal contractor rules and deadlines.
            </p>
          </div>
          <Radar className="h-10 w-10 text-foreground/60 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
          {recentUpdates.map((update) => (
            <Card key={update.date} className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl font-semibold">{update.title}</CardTitle>
                  <time className="text-sm text-muted-foreground whitespace-nowrap ml-4">
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
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link href="/radar">
              View all updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

