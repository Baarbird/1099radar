import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, AlertCircle } from "lucide-react";
import { UndrawIllustration } from "@/components/shared/UndrawIllustration";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ClassificationPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              Contractor vs <span className="text-primary">Employee</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              Correct classification is the foundation of 1099 compliance. Understand the federal rules that distinguish independent contractors from employees.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20">
                1099-NEC
              </div>
              <div className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-bold text-sm border border-border/50">
                W-2
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last p-8">
            <UndrawIllustration 
              name="decide" 
              className="w-full h-auto drop-shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm group overflow-hidden">
            <div className="h-2 bg-primary w-full" />
            <CardHeader className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Briefcase className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">Independent Contractor</CardTitle>
                  <Badge variant="default" className="mt-2 font-bold bg-primary/10 text-primary border-transparent">1099 Form</Badge>
                </div>
              </div>
              <CardDescription className="text-lg leading-relaxed font-normal text-muted-foreground">
                A business entity or individual providing services under specific contract terms.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 lg:p-10 pt-0">
              <div className="space-y-6">
                <h4 className="font-bold text-foreground text-lg uppercase tracking-wider">Key characteristics:</h4>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Controls how work is performed",
                    "Sets own work schedule",
                    "Provides own tools and equipment",
                    "Can work for multiple clients",
                    "Pays own self-employment taxes",
                    "Receives no employee benefits"
                  ].map((char, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl bg-card/50 backdrop-blur-sm group overflow-hidden">
            <div className="h-2 bg-muted w-full" />
            <CardHeader className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-muted text-muted-foreground group-hover:bg-muted-foreground group-hover:text-white transition-all duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">Employee</CardTitle>
                  <Badge variant="secondary" className="mt-2 font-bold">W-2 Form</Badge>
                </div>
              </div>
              <CardDescription className="text-lg leading-relaxed font-normal text-muted-foreground">
                A person working under the direct control and supervision of an employer.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 lg:p-10 pt-0">
              <div className="space-y-6">
                <h4 className="font-bold text-foreground text-lg uppercase tracking-wider">Key characteristics:</h4>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Employer controls work process",
                    "Set schedule by employer",
                    "Employer provides tools/workspace",
                    "Typically works for one employer",
                    "Employer withholds all taxes",
                    "May receive benefits (health, PTO)"
                  ].map((char, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border/40 bg-card/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="p-8 lg:p-12 bg-primary/5 border-b border-border/40">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl font-bold">Classification Factors</CardTitle>
            </div>
            <CardDescription className="text-xl max-w-3xl text-foreground font-medium">
              The IRS and Department of Labor use a "totality of the circumstances" approach. No single factor is determinative.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Behavioral Control",
                  items: ["Instructions provided", "Training methods", "Evaluation systems"]
                },
                {
                  title: "Financial Control",
                  items: ["Equipment investment", "Unreimbursed expenses", "Profit/loss opportunity"]
                },
                {
                  title: "Relationship Type",
                  items: ["Written contracts", "Employee benefits", "Permanency of role"]
                }
              ].map((factor, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="font-extrabold text-primary text-xl">{factor.title}</h4>
                  <ul className="space-y-4 list-none p-0">
                    {factor.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground font-semibold border-b border-border/30 pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 rounded-3xl bg-destructive/5 border border-destructive/10 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left space-y-2">
                <h4 className="text-2xl font-bold text-destructive">Warning: Misclassification Risks</h4>
                <p className="text-muted-foreground leading-relaxed font-normal">
                  Misclassifying employees as contractors can result in massive penalties, unpaid back taxes, and legal issues. When in doubt, always seek professional tax advice.
                </p>
              </div>
              <Button asChild variant="destructive" size="lg" className="shrink-0 h-14 px-8 rounded-2xl shadow-xl shadow-destructive/20 font-bold">
                <Link href="/tools/compliance-check">Check Your Risk</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

