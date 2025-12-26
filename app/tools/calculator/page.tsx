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
      <div className="mx-auto max-w-2xl space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Rate & Tax Calculator</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estimate contractor rates and understand tax implications.
          </p>
        </div>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-foreground/60" />
              <CardTitle className="text-2xl font-semibold">Calculator</CardTitle>
            </div>
            <CardDescription className="text-base leading-relaxed">
              Enter your hourly rate and hours to see estimated calculations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="rate" className="text-base">Hourly Rate ($)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="e.g., 50"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="h-11 text-base"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="hours" className="text-base">Hours Worked</Label>
              <Input
                id="hours"
                type="number"
                placeholder="e.g., 40"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="h-11 text-base"
              />
            </div>

            {(rate > 0 || hoursWorked > 0) && (
              <div className="space-y-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium">Gross Pay:</span>
                  <span className="text-xl font-semibold">${grossPay.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium">Estimated Self-Employment Tax (15.3%):</span>
                  <span className="text-xl font-semibold text-muted-foreground">
                    ${selfEmploymentTax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-base font-medium">Estimated Net (after SE tax):</span>
                  <span className="text-2xl font-bold">${estimatedNet.toFixed(2)}</span>
                </div>
              </div>
            )}

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="font-medium">Note:</strong> This is an estimate. Actual taxes depend on many factors including
                deductions, other income, and tax bracket. Self-employment tax rate is approximate for 2024.
                Consult with a tax professional for accurate calculations.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Understanding Self-Employment Tax</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              Independent contractors are responsible for paying self-employment tax, which covers Social Security and Medicare.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
              <li>Self-employment tax rate is approximately 15.3% (for 2024)</li>
              <li>This is in addition to regular income tax</li>
              <li>You may be able to deduct business expenses to reduce taxable income</li>
              <li>Quarterly estimated tax payments may be required</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

