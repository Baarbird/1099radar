export interface Question {
  id: string;
  text: string;
  type: 'yes-no' | 'select' | 'multi-select';
  options?: string[];
  required: boolean;
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

