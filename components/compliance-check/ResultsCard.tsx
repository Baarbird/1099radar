"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DefensibleRiskReport } from "@/types/compliance";
import { RiskDial } from "@/components/shared/RiskDial";
import { FactorBreakdown } from "./FactorBreakdown";
import { generatePDFDownloadLink } from "@/lib/pdf-generator";
import { FileText, Download, RotateCcw, Clock } from "lucide-react";

interface ResultsCardProps {
  report: DefensibleRiskReport;
  reportingForm?: "1099-NEC" | "1099-MISC" | "none";
  missingItems?: string[];
  nextSteps?: string[];
  onStartOver: () => void;
}

export function ResultsCard({
  report,
  reportingForm,
  missingItems = [],
  nextSteps = [],
  onStartOver,
}: ResultsCardProps) {
  const getRiskBadgeVariant = () => {
    if (report.level === "low") return "default";
    if (report.level === "medium") return "secondary";
    return "destructive";
  };

  const getFormBadgeVariant = () => {
    if (!reportingForm || reportingForm === "none") return "outline";
    return "default";
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Main Risk Score Card */}
      <Card className="border-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl">Defensible Risk Assessment</CardTitle>
              <CardDescription className="text-base mt-2">
                Comprehensive misclassification risk analysis with IRS-aligned audit trail
              </CardDescription>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div className="flex items-center gap-1 mb-1">
                <Clock className="h-4 w-4" />
                <span>{new Date(report.generatedAt).toLocaleString()}</span>
              </div>
              <div className="text-xs">Engine v{report.version}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Risk Score Dial */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
            <RiskDial score={report.score} size={220} />
            <div className="flex-1 space-y-4 max-w-md">
              <div>
                <Badge
                  variant={getRiskBadgeVariant()}
                  className="text-lg px-4 py-2 capitalize mb-3"
                >
                  {report.level} Risk
                </Badge>
                <p className="text-base leading-relaxed text-foreground">
                  {report.summary}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{report.behavioralScore}</div>
                  <div className="text-xs text-muted-foreground">Behavioral</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{report.financialScore}</div>
                  <div className="text-xs text-muted-foreground">Financial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{report.relationshipScore}</div>
                  <div className="text-xs text-muted-foreground">Relationship</div>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Download */}
          <div className="flex items-center justify-center pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="inline-flex">
                {generatePDFDownloadLink(report)}
              </div>
              <Button onClick={onStartOver} variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Start New Assessment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Factor Breakdown */}
      <FactorBreakdown
        factors={report.factors}
        behavioralScore={report.behavioralScore}
        financialScore={report.financialScore}
        relationshipScore={report.relationshipScore}
      />

      {/* Reporting Form (if provided) */}
      {reportingForm && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Likely Reporting Form</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Badge variant={getFormBadgeVariant()} className="text-base px-3 py-1">
                {reportingForm === "none"
                  ? "No form required"
                  : `Form ${reportingForm}`}
              </Badge>
              {reportingForm !== "none" && (
                <p className="text-sm text-muted-foreground">
                  You'll need to file this form if payments total $600 or more for the year.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Missing Items */}
      {missingItems.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Key Missing Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {missingItems.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Next Steps */}
      {nextSteps.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              {nextSteps.map((step, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

