import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="container px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          1099Radar helps businesses understand, monitor, and stay compliant with federal contractor (1099) rules — clearly and in real time.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
          Stop guessing about contractor compliance. Get clear answers about federal requirements, deadlines, and forms—all in plain English, no legal jargon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="text-base">
            <Link href="/tools/compliance-check">
              See what applies to you
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="/learn/hire-contractor">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse contractor rules
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

