import { RiskFactors, ComplianceResults } from "@/types/compliance";

/**
 * Calculate risk factors based on answers
 * Transparent logic - each factor is clearly defined
 */
export function calculateRiskFactors(
  answers: Record<string, string | string[]>
): RiskFactors {
  let applicability = 0; // How applicable are the rules?
  let severity = 0; // How severe are the consequences?
  let likelihood = 0; // How likely is an issue?
  let urgency = 0; // How urgent is action needed?

  // Applicability: Based on payment amount and type
  if (answers["payment-amount"] === "$600 or more") {
    applicability += 8; // High applicability if over $600 threshold
  } else if (answers["payment-amount"] === "Less than $600") {
    applicability += 2; // Low applicability if under threshold
  } else {
    applicability += 5; // Medium if unsure
  }

  // Severity: Based on missing documentation and classification risk
  if (answers["w9-collected"] === "no") {
    severity += 6; // Missing W-9 is a significant issue
  }
  if (answers["contract-written"] === "no") {
    severity += 3; // Missing contract increases risk
  }

  // Likelihood: Based on classification indicators
  let classificationRiskIndicators = 0;
  
  // Employee-like indicators increase likelihood of misclassification
  if (answers["work-location"] === "At your business location") {
    classificationRiskIndicators += 2;
  }
  if (answers["tools-provided"] === "yes") {
    classificationRiskIndicators += 2;
  }
  if (answers["work-schedule"] === "no") {
    classificationRiskIndicators += 2;
  }
  if (answers["other-clients"] === "no") {
    classificationRiskIndicators += 2;
  }
  if (answers["supervision"] === "yes") {
    classificationRiskIndicators += 3;
  }
  if (answers["benefits-provided"] === "yes") {
    classificationRiskIndicators += 4; // Strong employee indicator
  }

  likelihood = Math.min(10, classificationRiskIndicators);

  // Urgency: Based on payment amount and missing items
  if (answers["payment-amount"] === "$600 or more") {
    urgency += 5; // Higher urgency if over threshold
  }
  if (answers["w9-collected"] === "no") {
    urgency += 3; // Need W-9 before filing
  }
  if (classificationRiskIndicators >= 6) {
    urgency += 2; // High classification risk needs attention
  }

  // Normalize to 0-10 scale
  return {
    applicability: Math.min(10, applicability),
    severity: Math.min(10, severity),
    likelihood: Math.min(10, likelihood),
    urgency: Math.min(10, urgency),
  };
}

/**
 * Calculate overall risk score (0-10) from risk factors
 * Weighted average with transparency
 */
export function calculateRiskScore(factors: RiskFactors): number {
  // Weights: Applicability and Likelihood are most important
  const weights = {
    applicability: 0.3,
    severity: 0.2,
    likelihood: 0.3,
    urgency: 0.2,
  };

  const score =
    factors.applicability * weights.applicability +
    factors.severity * weights.severity +
    factors.likelihood * weights.likelihood +
    factors.urgency * weights.urgency;

  return Math.round(score * 10) / 10; // Round to 1 decimal
}

/**
 * Get plain English explanation of risk score
 */
export function getRiskExplanation(score: number): string {
  if (score <= 3) {
    return "Your compliance risk is low. You're likely following the rules correctly, but review the recommendations to ensure everything is in order.";
  } else if (score <= 6) {
    return "Your compliance risk is moderate. There are some areas that need attention. Review the missing items and next steps to reduce your risk.";
  } else {
    return "Your compliance risk is high. There are significant issues that need immediate attention. Follow the recommended next steps to address compliance gaps.";
  }
}

/**
 * Determine classification risk level
 */
export function getClassificationRisk(
  answers: Record<string, string | string[]>
): "low" | "medium" | "high" {
  let indicators = 0;

  if (answers["work-location"] === "At your business location") indicators++;
  if (answers["tools-provided"] === "yes") indicators++;
  if (answers["work-schedule"] === "no") indicators++;
  if (answers["other-clients"] === "no") indicators++;
  if (answers["supervision"] === "yes") indicators++;
  if (answers["benefits-provided"] === "yes") indicators += 2; // Strong indicator

  if (indicators <= 1) return "low";
  if (indicators <= 3) return "medium";
  return "high";
}

/**
 * Determine reporting form based on payment type
 */
export function getReportingForm(
  answers: Record<string, string | string[]>
): "1099-NEC" | "1099-MISC" | "none" {
  const paymentType = answers["payment-type"];
  const paymentAmount = answers["payment-amount"];

  // No form needed if under $600
  if (paymentAmount === "Less than $600") {
    return "none";
  }

  // 1099-NEC is for non-employee compensation (services)
  if (paymentType === "Services (work performed)") {
    return "1099-NEC";
  }

  // 1099-MISC is for other types of income
  if (
    paymentType === "Rent or lease payments" ||
    paymentType === "Royalties" ||
    paymentType === "Prizes or awards" ||
    paymentType === "Other income"
  ) {
    return "1099-MISC";
  }

  // Default to none if unsure
  return "none";
}

/**
 * Get missing items based on answers
 */
export function getMissingItems(
  answers: Record<string, string | string[]>
): string[] {
  const missing: string[] = [];

  if (answers["w9-collected"] === "no") {
    missing.push("W-9 form not collected");
  }

  if (answers["contract-written"] === "no") {
    missing.push("Written contract or agreement");
  }

  const paymentAmount = answers["payment-amount"];
  if (paymentAmount === "$600 or more" && answers["w9-collected"] === "no") {
    missing.push("Taxpayer Identification Number (TIN) from W-9");
  }

  return missing;
}

/**
 * Get recommended next steps based on results
 */
export function getNextSteps(results: ComplianceResults): string[] {
  const steps: string[] = [];

  if (results.reportingForm !== "none") {
    steps.push(`Collect a completed W-9 form before making payments (required for ${results.reportingForm})`);
  }

  if (results.missingItems.length > 0) {
    steps.push("Gather missing documentation listed above");
  }

  if (results.classificationRisk === "high") {
    steps.push("Review contractor classification - consider consulting with a tax professional");
    steps.push("Document the independent contractor relationship clearly in writing");
  } else if (results.classificationRisk === "medium") {
    steps.push("Review contractor classification factors to ensure proper classification");
  }

  if (results.reportingForm !== "none") {
    steps.push(`File ${results.reportingForm} by January 31st for the previous tax year`);
    steps.push("Send Copy B to the payee by January 31st");
  }

  if (results.riskScore >= 7) {
    steps.push("Consider consulting with a tax professional or accountant for guidance");
  }

  return steps;
}

