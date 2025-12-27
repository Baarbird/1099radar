export interface Question {
  id: string;
  text: string;
  type: 'yes-no' | 'select' | 'multi-select';
  options?: string[];
  required: boolean;
  category?: 'behavioral' | 'financial' | 'relationship' | 'administrative';
}

export interface ComplianceResults {
  reportingForm: '1099-NEC' | '1099-MISC' | 'none';
  classificationRisk: 'low' | 'medium' | 'high';
  riskScore: number;
  riskExplanation: string;
  missingItems: string[];
  nextSteps: string[];
  answers: Record<string, string | string[]>;
}

export interface RiskFactors {
  applicability: number; // 0-10: How applicable are the rules?
  severity: number; // 0-10: How severe are the consequences?
  likelihood: number; // 0-10: How likely is an issue?
  urgency: number; // 0-10: How urgent is action needed?
}

/**
 * Individual risk factor with audit trail information
 */
export interface RiskFactor {
  id: string;
  category: 'behavioral' | 'financial' | 'relationship';
  irsReference: string;           // e.g., "IRS Pub 15-A, Section 2"
  question: string;
  answer: string;
  riskContribution: number;       // Points added to score (0-100 scale)
  maxPossible: number;            // Maximum possible points for this factor
  explanation: string;            // Plain English audit trail
  indicator: 'employee' | 'contractor' | 'neutral';
}

/**
 * Comprehensive defensible risk report with full audit trail
 */
export interface DefensibleRiskReport {
  score: number;                  // 0-100
  level: 'low' | 'medium' | 'high';
  factors: RiskFactor[];
  summary: string;
  generatedAt: string;            // ISO timestamp
  version: string;                // Engine version for audit
  behavioralScore: number;        // Sub-score for behavioral factors
  financialScore: number;         // Sub-score for financial factors
  relationshipScore: number;      // Sub-score for relationship factors
}

