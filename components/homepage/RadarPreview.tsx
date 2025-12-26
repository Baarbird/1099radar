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
    <section className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Federal Updates Radar
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed about changes to federal contractor rules and deadlines.
            </p>
          </div>
          <Radar className="h-8 w-8 text-primary hidden md:block" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6">
          {recentUpdates.map((update) => (
            <Card key={update.date} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                  <time className="text-sm text-muted-foreground">
                    {new Date(update.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <CardDescription>{update.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
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

