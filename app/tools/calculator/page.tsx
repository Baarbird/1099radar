"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export default function CalculatorPage() {
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [selfEmploymentTaxRate] = useState(0.153); // 15.3% for 2024 (approximate)

  const rate = parseFloat(hourlyRate) || 0;
  const hoursWorked = parseFloat(hours) || 0;
  const grossPay = rate * hoursWorked;
  const selfEmploymentTax = grossPay * selfEmploymentTaxRate;
  const estimatedNet = grossPay - selfEmploymentTax;

  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left order-last lg:order-first">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground">
              Rate & Tax <span className="text-primary">Calculator</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal">
              Estimate contractor rates and understand federal tax implications. Independent contractors are responsible for their own Social Security and Medicare taxes.
            </p>
            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Self-employment tax rate: 15.3% (2024)</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://raw.githubusercontent.com/atlo-team/undraw-api/master/data/images/undraw_calculator_re_8v0v.svg" 
              alt="Calculator illustration" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border border-border/40 bg-card/80 backdrop-blur-sm lg:col-span-2 shadow-xl">
            <CardHeader className="p-8 lg:p-10 border-b border-border/40">
              <CardTitle className="text-2xl font-bold">Calculate Estimates</CardTitle>
              <CardDescription className="text-base">Enter your rates to see gross pay and estimated taxes.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 lg:p-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="rate" className="text-base font-bold">Hourly Rate ($)</Label>
                  <Input
                    id="rate"
                    type="number"
                    placeholder="e.g., 50"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="h-14 text-lg rounded-2xl border-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="hours" className="text-base font-bold">Hours Worked</Label>
                  <Input
                    id="hours"
                    type="number"
                    placeholder="e.g., 40"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="h-14 text-lg rounded-2xl border-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {(rate > 0 || hoursWorked > 0) && (
                <div className="space-y-6 p-8 rounded-3xl bg-muted/30 border border-border/40 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Gross Pay:</span>
                    <span className="text-2xl font-bold">${grossPay.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span className="text-base">Estimated Self-Employment Tax (15.3%):</span>
                    <span className="text-xl font-semibold">
                      -${selfEmploymentTax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-border/40">
                    <span className="text-xl font-bold">Estimated Net (after SE tax):</span>
                    <span className="text-4xl font-extrabold text-primary">${estimatedNet.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              )}

              <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-600 mt-1">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Important Note:</strong> This is a simplified estimate for federal self-employment tax only. It does not account for income tax brackets, business deductions, or state taxes. Consult with a tax professional for official advice.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm p-8">
              <h3 className="text-xl font-bold mb-4">Self-Employment Tax</h3>
              <p className="text-muted-foreground leading-relaxed font-normal mb-6">
                Independent contractors pay the full Social Security and Medicare tax amount themselves, which is normally split between employee and employer.
              </p>
              <ul className="space-y-4 list-none p-0">
                {[
                  "Social Security: 12.4%",
                  "Medicare: 2.9%",
                  "Total Rate: 15.3%",
                  "Paid quarterly (estimated)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
              <h4 className="font-bold">Next Steps</h4>
              <p className="text-sm text-muted-foreground">Now that you've estimated your rates, ensure your engagement is properly classified.</p>
              <Button asChild variant="outline" className="w-full rounded-2xl bg-card">
                <Link href="/tools/classification">Check Classification</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

