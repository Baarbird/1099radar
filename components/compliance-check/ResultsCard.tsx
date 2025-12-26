import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComplianceResults } from "@/types/compliance";
import { RiskScore } from "@/components/shared/RiskScore";
import { FileText, AlertCircle, CheckCircle2, ListChecks } from "lucide-react";

interface ResultsCardProps {
  results: ComplianceResults;
  onStartOver: () => void;
}

export function ResultsCard({ results, onStartOver }: ResultsCardProps) {
  const getRiskBadgeVariant = () => {
    if (results.classificationRisk === "low") return "default";
    if (results.classificationRisk === "medium") return "secondary";
    return "destructive";
  };

  const getFormBadgeVariant = () => {
    if (results.reportingForm === "none") return "outline";
    return "default";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Your Compliance Assessment</CardTitle>
          <CardDescription className="text-base">
            Based on your answers, here's what you need to know
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Reporting Form */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Likely Reporting Form</h3>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={getFormBadgeVariant()} className="text-base px-3 py-1">
                {results.reportingForm === "none"
                  ? "No form required"
                  : `Form ${results.reportingForm}`}
              </Badge>
              {results.reportingForm !== "none" && (
                <p className="text-sm text-muted-foreground">
                  You'll need to file this form if payments total $600 or more for the year.
                </p>
              )}
              {results.reportingForm === "none" && (
                <p className="text-sm text-muted-foreground">
                  Payments under $600 typically don't require a 1099 form.
                </p>
              )}
            </div>
          </div>

          {/* Classification Risk */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Classification Risk</h3>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={getRiskBadgeVariant()} className="text-base px-3 py-1 capitalize">
                {results.classificationRisk} Risk
              </Badge>
              <p className="text-sm text-muted-foreground">
                {results.classificationRisk === "low" &&
                  "Your arrangement appears to be properly classified as an independent contractor."}
                {results.classificationRisk === "medium" &&
                  "There are some indicators that suggest reviewing your classification."}
                {results.classificationRisk === "high" &&
                  "There are strong indicators that this might be an employee relationship. Review carefully."}
              </p>
            </div>
          </div>

          {/* Risk Score */}
          <RiskScore score={results.riskScore} explanation={results.riskExplanation} />

          {/* Missing Items */}
          {results.missingItems.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-semibold">Key Missing Items</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {results.missingItems.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold">Recommended Next Steps</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              {results.nextSteps.map((step, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-4 border-t">
            <Button onClick={onStartOver} variant="outline" className="w-full sm:w-auto">
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

