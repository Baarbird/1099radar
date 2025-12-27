import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertTriangle, DollarSign } from "lucide-react";
import { Infographic } from "@/components/shared/Infographic";

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
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src="https://assets.manypixels.co/illustrations/calendar" 
              alt="Calendar illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">1099 Deadlines & Penalties</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Important dates and penalties for federal 1099 filing requirements.
          </p>
        </div>

        {/* Example infographic - user can replace with their NotebookLM-designed graphics */}
        {/* <Infographic 
          src="/infographics/deadlines-calendar.png"
          alt="1099 filing deadlines calendar"
          caption="Key dates for 1099 filing deadlines throughout the year"
        /> */}

        <div className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight">Key Deadlines</h2>
          <div className="space-y-6">
            {deadlines.map((deadline) => {
              const Icon = deadline.icon;
              return (
                <Card key={deadline.title} className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="h-5 w-5 text-foreground/60" />
                          <CardTitle className="text-2xl font-semibold">{deadline.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base leading-relaxed mt-2">
                          {deadline.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-4 font-medium text-base px-3 py-1">
                        {deadline.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-base">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-muted-foreground">
                        <strong className="font-medium">Penalty:</strong> {deadline.penalty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-foreground/60" />
              <CardTitle className="text-xl font-semibold">Penalty Schedule</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                Penalties for late or incorrect 1099 filings can add up quickly. Here's the current penalty structure:
              </p>
              <div className="space-y-4">
                {penalties.map((penalty) => (
                  <div key={penalty.type} className="border-l-2 border-foreground/20 pl-4 py-2">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-base">{penalty.type}</h4>
                      <Badge variant="secondary" className="font-medium">{penalty.amount}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{penalty.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc list-inside space-y-3 text-base text-muted-foreground leading-relaxed ml-2">
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

