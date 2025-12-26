import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertTriangle, DollarSign } from "lucide-react";

const deadlines = [
  {
    date: "January 31",
    title: "File 1099-NEC with IRS",
    description: "File Copy A of Form 1099-NEC with the IRS for the previous tax year.",
    penalty: "$60 per form (if filed late)",
    icon: Calendar,
  },
  {
    date: "January 31",
    title: "Send 1099-NEC to Contractor",
    description: "Send Copy B of Form 1099-NEC to the contractor by this date.",
    penalty: "$310 per form (if not sent)",
    icon: Calendar,
  },
  {
    date: "February 28",
    title: "File 1099-MISC with IRS (Paper)",
    description: "If filing 1099-MISC on paper, deadline is February 28.",
    penalty: "$60 per form (if filed late)",
    icon: Calendar,
  },
  {
    date: "March 31",
    title: "File 1099-MISC with IRS (Electronic)",
    description: "If filing 1099-MISC electronically, deadline is March 31.",
    penalty: "$60 per form (if filed late)",
    icon: Calendar,
  },
];

const penalties = [
  {
    type: "Late Filing (30 days or less)",
    amount: "$60 per form",
    description: "Minimum $630 per year",
  },
  {
    type: "Late Filing (31 days - August 1)",
    amount: "$120 per form",
    description: "Minimum $1,260 per year",
  },
  {
    type: "Late Filing (After August 1)",
    amount: "$310 per form",
    description: "Minimum $3,100 per year",
  },
  {
    type: "Failure to Furnish to Recipient",
    amount: "$310 per form",
    description: "If you don't send Copy B to the contractor",
  },
  {
    type: "Intentional Disregard",
    amount: "$630 per form",
    description: "No minimum penalty, applies to all forms",
  },
];

export default function DeadlinesPage() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">1099 Deadlines & Penalties</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important dates and penalties for federal 1099 filing requirements.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Key Deadlines</h2>
          {deadlines.map((deadline) => {
            const Icon = deadline.icon;
            return (
              <Card key={deadline.title} className="border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{deadline.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base mt-2">
                        {deadline.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {deadline.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="text-muted-foreground">
                      <strong>Penalty:</strong> {deadline.penalty}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Penalty Schedule</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Penalties for late or incorrect 1099 filings can add up quickly. Here's the current penalty structure:
              </p>
              <div className="space-y-3">
                {penalties.map((penalty) => (
                  <div key={penalty.type} className="border-l-2 border-primary pl-4 py-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{penalty.type}</h4>
                      <Badge variant="secondary">{penalty.amount}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{penalty.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Deadlines are based on the previous tax year (e.g., January 31, 2025 for 2024 tax year)</li>
              <li>Penalties can be waived if you can show reasonable cause</li>
              <li>Electronic filing is required if you file 250 or more forms</li>
              <li>Keep copies of all 1099 forms for at least 4 years</li>
              <li>If you miss a deadline, file as soon as possible to minimize penalties</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

