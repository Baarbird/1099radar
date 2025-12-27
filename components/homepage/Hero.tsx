import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
          alt="Business office background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container relative px-6 py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-5xl text-center space-y-10">
          <div className="space-y-6">
            <p className="text-lg font-medium tracking-tight sm:text-xl text-primary/90 uppercase tracking-wider">
              1099Radar helps businesses understand, monitor, and stay compliant with federal contractor (1099) rules — clearly and in real time.
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
              Stop guessing about contractor compliance.
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed font-normal">
              Get clear answers about federal requirements, deadlines, and forms—all in plain English, no legal jargon.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-base h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/tools/compliance-check">
                See what applies to you
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-14 px-8 rounded-xl border-2">
              <Link href="/learn/hire-contractor">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse contractor rules
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

