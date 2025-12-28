"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskFactor } from "@/types/compliance";
import { ChevronDown, ChevronUp, FileText, DollarSign, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FactorBreakdownProps {
  factors: RiskFactor[];
  behavioralScore: number;
  financialScore: number;
  relationshipScore: number;
}

const categoryConfig = {
  behavioral: {
    label: "Behavioral Control",
    icon: FileText,
    description: "IRS Factor 1: Control over how and when work is performed",
    color: "text-stone-600",
    bgColor: "bg-stone-50",
    borderColor: "border-stone-200",
  },
  financial: {
    label: "Financial Control",
    icon: DollarSign,
    description: "IRS Factor 2: Control over business aspects and financial investment",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  relationship: {
    label: "Type of Relationship",
    icon: Users,
    description: "IRS Factor 3: Written contracts, permanence, and benefits",
    color: "text-orange-800",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
};

export function FactorBreakdown({
  factors,
  behavioralScore,
  financialScore,
  relationshipScore,
}: FactorBreakdownProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const getCategoryFactors = (category: "behavioral" | "financial" | "relationship") => {
    return factors.filter((f) => f.category === category);
  };

  const getCategoryScore = (category: "behavioral" | "financial" | "relationship") => {
    if (category === "behavioral") return behavioralScore;
    if (category === "financial") return financialScore;
    return relationshipScore;
  };

  const getIndicatorBadge = (indicator: "employee" | "contractor" | "neutral") => {
    if (indicator === "employee") {
      return <Badge variant="destructive" className="text-xs">Employee Indicator</Badge>;
    }
    if (indicator === "contractor") {
      return <Badge variant="default" className="text-xs bg-amber-700">Contractor Indicator</Badge>;
    }
    return <Badge variant="secondary" className="text-xs">Neutral</Badge>;
  };

  return (
    <div className="space-y-4">
      {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((category) => {
        const config = categoryConfig[category];
        const categoryFactors = getCategoryFactors(category);
        const categoryScore = getCategoryScore(category);
        const isExpanded = expandedCategories.has(category);
        const Icon = config.icon;

        if (categoryFactors.length === 0) return null;

        return (
          <Card
            key={category}
            className={cn("border-2 transition-all", config.borderColor)}
          >
            <CardHeader
              className={cn("cursor-pointer hover:opacity-80", config.bgColor)}
              onClick={() => toggleCategory(category)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className={cn("h-5 w-5", config.color)} />
                  <div>
                    <CardTitle className="text-lg">{config.label}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {config.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className={cn("text-2xl font-bold", config.color)}>
                      {categoryScore}
                    </div>
                    <div className="text-xs text-muted-foreground">/ 100</div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </CardHeader>
            {isExpanded && (
              <CardContent className="pt-4 space-y-4">
                {categoryFactors.map((factor) => (
                  <div
                    key={factor.id}
                    className="p-4 rounded-lg border bg-card space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-sm">{factor.question}</h4>
                          {getIndicatorBadge(factor.indicator)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">Your answer:</span> {factor.answer}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span className="font-medium">IRS Reference:</span>
                          <span>{factor.irsReference}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">
                            Risk Contribution:
                          </span>
                          <span
                            className={cn(
                              "text-sm font-bold",
                              factor.riskContribution >= 7
                                ? "text-red-600"
                                : factor.riskContribution >= 4
                                ? "text-yellow-600"
                                : "text-amber-700"
                            )}
                          >
                            +{factor.riskContribution} points
                          </span>
                          <span className="text-xs text-muted-foreground">
                            (of {factor.maxPossible} possible)
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground bg-muted/30 p-3 rounded border-l-4 border-primary/30">
                          {factor.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  );
}

