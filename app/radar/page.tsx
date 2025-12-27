import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Radar, Calendar, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-primary/10 text-primary">
              <Radar className="h-6 w-6 animate-pulse" />
              <span className="font-bold text-sm uppercase tracking-widest">Live Monitoring</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground leading-tight">
              Federal Updates <span className="text-primary underline underline-offset-8 decoration-primary/20">Radar</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-xl">
              Stay ahead of regulatory changes. We track federal contractor rules, deadlines, and guidance so you don't miss a beat.
            </p>
          </div>
          <div className="relative order-first lg:order-last p-8">
            <img 
              src="https://assets.manypixels.co/illustrations/radar" 
              alt="Radar monitoring illustration" 
              className="w-full h-auto drop-shadow-2xl animate-in zoom-in duration-1000"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Card className="border border-border/50 bg-card/80 backdrop-blur-sm p-8 lg:col-span-1 h-fit sticky top-24">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className={cn(
                    "text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all",
                    category === "All" 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-muted-foreground hover:bg-muted/50"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>

          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Recent Updates</h2>
              <Badge variant="outline" className="px-4 py-1 rounded-full font-bold">{updates.length} Updates</Badge>
            </div>
            <div className="space-y-6">
              {updates.map((update) => (
                <Card key={update.date} className="border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl bg-card/50 backdrop-blur-sm group overflow-hidden">
                  <div className="h-1 w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="font-bold bg-primary/10 text-primary border-transparent px-3 py-1 rounded-lg">{update.category}</Badge>
                          <time className="text-sm text-muted-foreground font-bold tracking-tight">
                            {new Date(update.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                        <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{update.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed font-normal text-muted-foreground italic">
                          {update.description}
                        </CardDescription>
                      </div>
                      <div className="hidden sm:block p-3 rounded-2xl bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <FileText className="h-6 w-6" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0 border-t border-border/20 mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-bold uppercase tracking-widest pt-4">
                      <div className="h-1 w-1 rounded-full bg-border" />
                      Source: <span className="text-foreground">{update.source}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="border border-border/50 bg-primary text-primary-foreground p-10 rounded-[32px] relative overflow-hidden text-center">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight">Never miss an update.</h2>
            <p className="text-lg opacity-90 font-medium leading-relaxed">
              Federal rules change frequently. Our radar is updated weekly to reflect the latest IRS and Department of Labor guidance.
            </p>
            <div className="flex justify-center pt-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 rounded-2xl font-bold shadow-xl">
                Refer a Friend
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </Card>
      </div>
    </div>
  );
}

