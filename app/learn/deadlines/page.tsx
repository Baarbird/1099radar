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
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              1099 <span className="text-primary">Deadlines</span> & Penalties
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Missing a deadline can be costly. Stay on top of federal 1099 filing requirements with our real-time tracking of important dates and penalty schedules.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <Calendar className="h-4 w-4" />
                Updated for 2024
              </div>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <img 
              src="https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_calendar_re_i4u4.svg" 
              alt="Calendar illustration" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Key Deadlines</h2>
            <div className="space-y-6">
              {deadlines.map((deadline) => {
                const Icon = deadline.icon;
                return (
                  <Card key={deadline.title} className="border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm group">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <Icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-2xl font-bold">{deadline.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base leading-relaxed mt-2 font-normal">
                            {deadline.description}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4 font-bold text-base px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary">
                          {deadline.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-base p-3 rounded-xl bg-destructive/5 border border-destructive/10">
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                        <span className="text-muted-foreground text-sm font-medium">
                          <strong className="text-destructive font-bold uppercase text-xs tracking-wider mr-1">Penalty:</strong> {deadline.penalty}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border border-border/40 bg-card/80 backdrop-blur-sm h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Penalty Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                  Penalties for late or incorrect 1099 filings can add up quickly. Here's the current federal penalty structure:
                </p>
                <div className="grid gap-4">
                  {penalties.map((penalty) => (
                    <div key={penalty.type} className="group p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-card transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-base text-foreground">{penalty.type}</h4>
                        <Badge variant="secondary" className="font-bold bg-primary/10 text-primary border-transparent">{penalty.amount}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-normal">{penalty.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Deadlines are based on the previous tax year",
                  "Penalties can be waived for reasonable cause",
                  "Electronic filing required for 250+ forms",
                  "Keep all 1099 forms for at least 4 years",
                  "File as soon as possible to minimize late fees"
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed font-normal p-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {note}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="relative p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center text-center space-y-4">
            <h4 className="text-xl font-bold">Need help filing?</h4>
            <p className="text-muted-foreground text-sm">Consult with a tax professional for specific advice on your business filing requirements.</p>
            <Button className="w-full rounded-2xl h-12 font-bold shadow-lg" asChild>
              <Link href="/tools/compliance-check">Start Check</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

