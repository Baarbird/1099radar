import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="container px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
          1099Radar helps businesses understand, monitor, and stay compliant with federal contractor (1099) rules — clearly and in real time.
        </h1>
        <p className="text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto leading-relaxed">
          Stop guessing about contractor compliance. Get clear answers about federal requirements, deadlines, and forms—all in plain English, no legal jargon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button asChild size="lg" className="text-base h-12 px-6">
            <Link href="/tools/compliance-check">
              See what applies to you
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base h-12 px-6">
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

