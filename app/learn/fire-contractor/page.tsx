import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, FileText, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">How to Fire a 1099 Contractor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important considerations when ending a contractor relationship under federal rules.
          </p>
        </div>

        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <CardTitle>Key Point</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
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
              <Card key={consideration.title} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{consideration.title}</CardTitle>
                  </div>
                  <CardDescription>{consideration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    {consideration.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Termination Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Before Terminating:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>Review your contract for termination clauses</li>
                <li>Ensure all completed work is paid for</li>
                <li>Collect any deliverables or work product</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">During Termination:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>Provide clear, written notice if required by contract</li>
                <li>Document the termination date</li>
                <li>Make final payment promptly</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">After Termination:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                <li>File 1099-NEC if payments totaled $600 or more</li>
                <li>Keep all records for tax purposes</li>
                <li>Update your contractor records</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="outline">
            <Link href="/learn/deadlines">View Filing Deadlines</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tools/compliance-check">Check Compliance</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

