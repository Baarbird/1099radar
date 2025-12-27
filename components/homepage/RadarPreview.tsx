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
    <section className="bg-transparent container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Radar className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                Federal Radar
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-normal leading-relaxed">
              Stay ahead of the curve. We monitor federal contractor rules and deadlines in real-time so you don't have to.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Monitoring</p>
              </div>
              <div className="h-10 w-px bg-border/50" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Federal Focus</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://assets.manypixels.co/illustrations/radar" 
              alt="Radar illustration" 
              className="w-full h-auto drop-shadow-xl animate-pulse duration-[4000ms]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
          {recentUpdates.map((update) => (
            <Card key={update.date} className="border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl bg-card/80 backdrop-blur-sm group shadow-sm">
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
          <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-2 shadow-sm hover:shadow-xl transition-all hover:scale-105 active:scale-95">
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

