import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, Users, AlertCircle, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Infographic } from "@/components/shared/Infographic";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              Hiring a <span className="text-primary">Contractor</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              A step-by-step guide to properly onboarding independent contractors under federal rules. Build strong partnerships while staying compliant.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Federal Compliance", "W-9 Collection", "Agreements"].map((tag) => (
                <div key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-first lg:order-last p-8">
            <img 
              src="https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_team_re_8v0v.svg" 
              alt="Hiring team illustration" 
              className="w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-700"
            />
          </div>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={cn(
                "flex flex-col lg:flex-row gap-8 items-center",
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                      {step.number}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">{step.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                    {step.description}
                  </p>
                  <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <ul className="space-y-3 list-none p-0">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full lg:w-1/2 p-8 flex justify-center bg-muted/20 rounded-3xl">
                  <img 
                    src={`https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_${step.number === 1 ? 'decide' : step.number === 2 ? 'documents' : step.number === 3 ? 'agreement' : step.number === 4 ? 'online_payment' : 'all_the_data'}_re_8v0v.svg`}
                    alt={step.title}
                    className="w-full max-w-sm h-auto opacity-80"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Card className="border border-border/40 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield className="h-64 w-64" />
          </div>
          <CardHeader className="relative z-10 p-8 lg:p-12">
            <CardTitle className="text-3xl font-bold mb-4">Important Reminders</CardTitle>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4 list-none p-0">
                  {[
                    "No benefits (health, PTO, etc.)",
                    "No schedule control",
                    "Contractor provides own tools"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Contractor pays own taxes",
                    "Keep records for 4 years",
                    "Annual classification review"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <div className="h-2 w-2 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </CardHeader>
        </Card>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-2 hover:scale-105 transition-all">
            <Link href="/tools/compliance-check">Check Your Compliance</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-2 hover:scale-105 transition-all">
            <Link href="/tools/classification">Learn About Classification</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

