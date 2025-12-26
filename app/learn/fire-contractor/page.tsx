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
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">How to Fire a 1099 Contractor</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Important considerations when ending a contractor relationship under federal rules.
          </p>
        </div>

        {/* Example infographic - user can replace with their NotebookLM-designed graphics */}
        {/* <Infographic 
          src="/infographics/fire-contractor-checklist.png"
          alt="Terminating a contractor checklist"
          caption="Key steps to follow when ending a contractor relationship"
        /> */}

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Key Point</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground leading-relaxed">
              Unlike employees, independent contractors can typically be terminated at any time, 
              subject to the terms of your contract. However, you still have compliance obligations 
              for work already performed.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {considerations.map((consideration) => {
            const Icon = consideration.icon;
            return (
              <Card key={consideration.title} className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-foreground/60" />
                    <CardTitle className="text-xl font-semibold">{consideration.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                    {consideration.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Termination Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-base">Before Terminating:</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                <li>Review your contract for termination clauses</li>
                <li>Ensure all completed work is paid for</li>
                <li>Collect any deliverables or work product</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-base">During Termination:</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                <li>Provide clear, written notice if required by contract</li>
                <li>Document the termination date</li>
                <li>Make final payment promptly</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-base">After Termination:</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                <li>File 1099-NEC if payments totaled $600 or more</li>
                <li>Keep all records for tax purposes</li>
                <li>Update your contractor records</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link href="/learn/deadlines">View Filing Deadlines</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link href="/tools/compliance-check">Check Compliance</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

