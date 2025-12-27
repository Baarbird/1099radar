import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, FileText, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Infographic } from "@/components/shared/Infographic";

const considerations = [
  {
    title: "Contract Terms",
    description: "Review your contract for termination clauses and notice requirements.",
    icon: FileText,
    details: [
      "Check if contract specifies termination procedures",
      "Follow any required notice periods",
      "Understand any penalties or fees for early termination",
    ],
  },
  {
    title: "Final Payment",
    description: "Ensure all work is completed and final payment is made.",
    icon: CheckCircle2,
    details: [
      "Complete final payment for work performed",
      "Get confirmation that all deliverables are received",
      "Keep records of final payment date",
    ],
  },
  {
    title: "1099 Filing",
    description: "File required 1099 forms even if the relationship ends mid-year.",
    icon: Calendar,
    details: [
      "If payments totaled $600 or more, file 1099-NEC",
      "File by January 31st for the previous tax year",
      "Send Copy B to the contractor by January 31st",
    ],
  },
  {
    title: "Documentation",
    description: "Keep records of the termination and final payments.",
    icon: AlertCircle,
    details: [
      "Document the termination date and reason",
      "Keep final payment records",
      "Retain all documentation for at least 4 years",
    ],
  },
];

export default function FireContractorPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              How to <span className="text-primary">Fire</span> a 1099 Contractor
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ending a business relationship requires careful handling of federal compliance obligations. Ensure a smooth transition while meeting all legal requirements.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <AlertCircle className="h-4 w-4" />
                Compliance Checklist
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <img 
              src="https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_checklist_re_8v0v.svg" 
              alt="Termination checklist illustration" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Key Point</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Unlike employees, independent contractors can typically be terminated at any time, 
              subject to the terms of your contract. However, you still have federal compliance obligations 
              for work already performed and reporting requirements for the tax year.
            </p>
          </div>
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {considerations.map((consideration) => {
            const Icon = consideration.icon;
            return (
              <Card key={consideration.title} className="border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{consideration.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed font-normal">{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 list-none p-0">
                    {consideration.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground text-base">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border border-border/40 bg-card/80 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="p-8 lg:p-12 lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Termination Best Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    Before
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Review contract clauses</li>
                    <li>Pay for completed work</li>
                    <li>Collect deliverables</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    After
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>File 1099-NEC ($600+)</li>
                    <li>Keep records (4 years)</li>
                    <li>Update internal files</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 flex flex-col justify-center border-l border-border/40">
              <h4 className="font-bold text-xl mb-4 text-center">Ready to check?</h4>
              <div className="space-y-4">
                <Button asChild variant="default" className="w-full h-12 rounded-2xl font-bold">
                  <Link href="/tools/compliance-check">Check Compliance</Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 rounded-2xl font-bold bg-card">
                  <Link href="/learn/deadlines">View Deadlines</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

