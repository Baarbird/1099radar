import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radar, Calendar, FileText } from "lucide-react";

const updates = [
  {
    date: "2024-01-15",
    category: "IRS Guidance",
    title: "IRS Updates 1099-NEC Filing Thresholds",
    description: "New guidance on when 1099-NEC forms are required for 2024 tax year. Clarifies payment thresholds and reporting requirements.",
    source: "IRS Notice 2024-XX",
  },
  {
    date: "2024-01-10",
    category: "DOL Rules",
    title: "DOL Contractor Classification Rules",
    description: "Updated federal guidance on independent contractor classification standards. New factors to consider when determining worker status.",
    source: "DOL Final Rule",
  },
  {
    date: "2023-12-20",
    category: "Deadline Reminder",
    title: "2024 Filing Season Reminder",
    description: "Reminder that 1099-NEC forms for 2023 tax year must be filed by January 31, 2024. Electronic filing now required for 250+ forms.",
    source: "IRS",
  },
  {
    date: "2023-11-15",
    category: "IRS Guidance",
    title: "Self-Employment Tax Updates",
    description: "Updated self-employment tax rates and thresholds for 2024. Changes to Social Security wage base and Medicare tax rates.",
    source: "IRS Publication 15",
  },
  {
    date: "2023-10-05",
    category: "Penalty Updates",
    title: "2024 Penalty Amounts Announced",
    description: "IRS announces updated penalty amounts for late or incorrect 1099 filings. Penalties increase based on how late the filing is.",
    source: "IRS Revenue Procedure",
  },
];

const categories = ["All", "IRS Guidance", "DOL Rules", "Deadline Reminder", "Penalty Updates"];

export default function RadarPage() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Radar className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">Federal Updates Radar</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about changes to federal contractor rules, deadlines, and guidance.
          </p>
        </div>

        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <CardTitle>About This Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This page tracks federal-level updates related to 1099 contractor compliance, 
              including IRS guidance, Department of Labor rules, deadline reminders, and penalty updates. 
              We focus on federal rules only—state-specific requirements are not included in v1.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Updates</h2>
          <div className="space-y-4">
            {updates.map((update) => (
              <Card key={update.date} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{update.category}</Badge>
                        <time className="text-sm text-muted-foreground">
                          {new Date(update.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <CardTitle className="text-xl mb-2">{update.title}</CardTitle>
                      <CardDescription className="text-base">
                        {update.description}
                      </CardDescription>
                    </div>
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Source: {update.source}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Federal rules and guidance can change. This radar is updated regularly to reflect 
              the latest information. For the most current official guidance, always refer to 
              IRS.gov and DOL.gov directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

