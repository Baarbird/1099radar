import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              1099 Compliance Simplified
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
              Stop <span className="text-primary italic">guessing</span> about contractor compliance.
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <p className="text-sm font-medium text-primary mb-2">Federal Focus</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Clear answers about federal requirements, no legal jargon.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <p className="text-sm font-medium text-primary mb-2">Real-Time</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Stay updated with the latest deadlines and forms.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base h-14 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                <Link href="/tools/compliance-check">
                  Start Compliance Check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base h-14 px-8 rounded-2xl border-2 hover:bg-muted/50 transition-all">
                <Link href="/learn/hire-contractor">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Rules
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="relative z-10 w-full h-auto p-8">
              <img 
                src="https://assets.manypixels.co/illustrations/searching" 
                alt="Contractor compliance illustration" 
                className="w-full h-auto drop-shadow-2xl"
                onError={(e) => {
                  // Fallback to a simple SVG if CDN fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            {/* Decorative bits and pieces */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

