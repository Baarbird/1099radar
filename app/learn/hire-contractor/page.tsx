import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, Users, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Infographic } from "@/components/shared/Infographic";

const steps = [
  {
    number: 1,
    title: "Verify Classification",
    description: "Ensure the person is properly classified as an independent contractor, not an employee.",
    details: [
      "Review classification factors (behavioral control, financial control, relationship type)",
      "Document why they're a contractor, not an employee",
      "When in doubt, consult with a tax professional",
    ],
    icon: Users,
  },
  {
    number: 2,
    title: "Collect W-9 Form",
    description: "Get a completed W-9 form before making the first payment.",
    details: [
      "W-9 provides the contractor's Taxpayer Identification Number (TIN)",
      "Required for filing 1099 forms if payments exceed $600",
      "Keep W-9 on file for your records",
    ],
    icon: FileText,
  },
  {
    number: 3,
    title: "Create Written Agreement",
    description: "Draft a clear contract that outlines the working relationship.",
    details: [
      "Specify scope of work and deliverables",
      "Clarify that they're an independent contractor",
      "Include payment terms and schedule",
      "State that contractor is responsible for their own taxes",
    ],
    icon: CheckCircle2,
  },
  {
    number: 4,
    title: "Set Up Payment Process",
    description: "Establish how and when you'll pay the contractor.",
    details: [
      "Determine payment method (check, ACH, etc.)",
      "Set payment schedule (weekly, monthly, per project)",
      "Track all payments throughout the year",
      "Keep detailed records of all transactions",
    ],
    icon: ArrowRight,
  },
  {
    number: 5,
    title: "Track Payments",
    description: "Monitor total payments to determine if 1099 filing is required.",
    details: [
      "Track cumulative payments throughout the year",
      "1099-NEC required if payments total $600 or more",
      "Keep accurate records for tax filing",
    ],
    icon: AlertCircle,
  },
];

export default function HireContractorPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">How to Hire a 1099 Contractor (Federal)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A step-by-step guide to properly hiring and working with independent contractors under federal rules.
          </p>
        </div>

        {/* Example infographic - user can replace with their NotebookLM-designed graphics */}
        {/* <Infographic 
          src="/infographics/hire-contractor-process.png"
          alt="Hiring a 1099 contractor process flow"
          caption="Visual guide to the contractor hiring process"
        /> */}

        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.number} className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground font-semibold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="h-5 w-5 text-foreground/60" />
                        <CardTitle className="text-2xl font-semibold">{step.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-14">
                    {step.details.map((detail, index) => (
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
            <CardTitle className="text-xl font-semibold">Important Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground leading-relaxed ml-2">
              <li>Do not provide benefits (health insurance, PTO, retirement) to contractors</li>
              <li>Do not control their schedule or how they perform the work</li>
              <li>Do not provide tools, equipment, or materials (unless specified in contract)</li>
              <li>Contractors are responsible for their own taxes and self-employment tax</li>
              <li>Keep all documentation (W-9, contracts, payment records) for at least 4 years</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link href="/tools/compliance-check">Check Your Compliance</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-11">
            <Link href="/tools/classification">Learn About Classification</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

