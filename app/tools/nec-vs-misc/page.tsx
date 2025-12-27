import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle2 } from "lucide-react";

export default function NECvsMISCPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              1099-NEC <span className="text-primary italic">vs</span> 1099-MISC
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              Confused about which form to file? You're not alone. Here is a clear breakdown of when to use each form based on current federal rules.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col p-4 rounded-2xl bg-muted/30 border border-border/40 text-center flex-1">
                <span className="text-2xl font-bold text-primary">$600</span>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Threshold</span>
              </div>
              <div className="flex flex-col p-4 rounded-2xl bg-muted/30 border border-border/40 text-center flex-1">
                <span className="text-2xl font-bold text-primary">Jan 31</span>
                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">NEC Deadline</span>
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last p-8">
            <img 
              src="https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_documents_re_8v0v.svg" 
              alt="Forms illustration" 
              className="w-full h-auto drop-shadow-2xl animate-in slide-in-from-top-8 duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm group overflow-hidden flex flex-col">
            <div className="h-2 bg-primary w-full opacity-20 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">Form 1099-NEC</CardTitle>
                  <Badge variant="default" className="mt-2 font-bold bg-primary/10 text-primary border-transparent uppercase text-[10px] tracking-widest">Non-Employee Compensation</Badge>
                </div>
              </div>
              <CardDescription className="text-lg leading-relaxed font-medium text-foreground">
                Payments made to independent contractors for services.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 lg:p-10 pt-0 flex-grow">
              <div className="space-y-6 text-muted-foreground">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-widest border-b border-border/40 pb-2">When to use:</h4>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Services performed by non-employees",
                    "Independent contractor payments",
                    "Freelancer and consultant fees",
                    "Professional service payments"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-sm"><strong>Threshold:</strong> Required if payments total $600+ for the year.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 hover:border-foreground/30 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm group overflow-hidden flex flex-col">
            <div className="h-2 bg-foreground w-full opacity-10 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-white transition-all">
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">Form 1099-MISC</CardTitle>
                  <Badge variant="secondary" className="mt-2 font-bold uppercase text-[10px] tracking-widest">Miscellaneous Income</Badge>
                </div>
              </div>
              <CardDescription className="text-lg leading-relaxed font-medium text-foreground">
                Other types of income payments, not for services.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 lg:p-10 pt-0 flex-grow">
              <div className="space-y-6 text-muted-foreground">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-widest border-b border-border/40 pb-2">When to use:</h4>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Rent or lease payments",
                    "Royalties (at least $10)",
                    "Prizes and awards",
                    "Other specific income types"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 rounded-2xl bg-muted/30 border border-border/40">
                  <p className="text-sm"><strong>Threshold:</strong> Varies by payment type (typically $600+).</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border/40 bg-primary/5 overflow-hidden relative p-8 lg:p-12 text-center rounded-3xl">
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl font-bold tracking-tight">Quick Decision Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { q: "Is it for services?", a: "NEC" },
                { q: "Rent or Royalties?", a: "MISC" },
                { q: "Less than $600?", a: "NONE" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border/40 shadow-sm">
                  <p className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-tighter">{item.q}</p>
                  <p className="text-2xl font-black text-primary">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-medium italic pt-4">Still not sure? Try our automated compliance check.</p>
            <Button asChild size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105">
              <Link href="/tools/compliance-check">Start Check</Link>
            </Button>
          </div>
          <div className="absolute bottom-0 right-0 -mr-12 -mb-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </Card>
      </div>
    </div>
  );
}

