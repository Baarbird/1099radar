import { RiskFactor, DefensibleRiskReport } from "@/types/compliance";
import { complianceQuestions } from "./compliance-logic";

const ENGINE_VERSION = "1.0.0";

/**
 * Maps question answers to IRS risk factors with detailed audit trail
 */
function evaluateFactor(
  questionId: string,
  answer: string | string[],
  questionText: string
): RiskFactor | null {
  const answerStr = Array.isArray(answer) ? answer[0] : answer;
  
  // BEHAVIORAL CONTROL FACTORS
  if (questionId === "work-location") {
    if (answerStr === "At your business location") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 8,
        maxPossible: 10,
        explanation: "When a business requires work to be performed at a specific location, particularly the business's premises, this indicates behavioral control typically associated with an employment relationship. The IRS considers this an employee indicator because independent contractors typically have flexibility to choose where they perform their work.",
        indicator: "employee",
      };
    } else if (answerStr === "At their own location or remotely") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Independent contractors typically have the right to choose where they perform their work. When work is performed at the contractor's own location or remotely, this supports independent contractor classification.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 4,
        maxPossible: 10,
        explanation: "A mix of locations suggests some flexibility but also some control over work location. This is a neutral indicator that should be evaluated alongside other factors.",
        indicator: "neutral",
      };
    }
  }

  if (questionId === "work-schedule") {
    if (answerStr === "no") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 7,
        maxPossible: 10,
        explanation: "When a business controls when work is performed, this is a strong indicator of behavioral control and an employment relationship. Independent contractors typically have the right to set their own schedules.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The ability to set one's own schedule is a key characteristic of independent contractor status. This supports proper classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "supervision") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 9,
        maxPossible: 10,
        explanation: "Detailed instructions and close supervision are strong indicators of behavioral control and an employment relationship. Independent contractors typically work with minimal supervision and use their own methods to achieve results.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Minimal supervision and the ability to determine how work is performed supports independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "training-provided") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 6,
        maxPossible: 10,
        explanation: "Providing training on how to perform work indicates behavioral control. Independent contractors typically bring their own skills and expertise and do not require training from the hiring business.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The absence of training requirements supports independent contractor classification, as contractors bring their own expertise.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "work-sequence") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 7,
        maxPossible: 10,
        explanation: "Controlling the order or sequence of work indicates behavioral control. Independent contractors typically determine how and in what order to complete their work.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The ability to determine work sequence supports independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "evaluation-method") {
    if (answerStr === "Ongoing performance reviews") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 8,
        maxPossible: 10,
        explanation: "Ongoing performance reviews are characteristic of an employment relationship. Independent contractors are typically evaluated only on the final result, not the process.",
        indicator: "employee",
      };
    } else if (answerStr === "Evaluate process and methods used") {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 5,
        maxPossible: 10,
        explanation: "Evaluating the process suggests some control over how work is performed, which leans toward employment. However, this is less definitive than ongoing reviews.",
        indicator: "neutral",
      };
    } else {
      return {
        id: questionId,
        category: "behavioral",
        irsReference: "IRS Publication 15-A, Section 2 - Behavioral Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Evaluating only the final result supports independent contractor classification, as contractors control the methods used to achieve results.",
        indicator: "contractor",
      };
    }
  }

  // FINANCIAL CONTROL FACTORS
  if (questionId === "tools-provided") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 7,
        maxPossible: 10,
        explanation: "Providing tools and equipment indicates financial control and an employment relationship. Independent contractors typically invest in their own tools and equipment.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The contractor's investment in their own tools and equipment supports independent contractor classification and demonstrates financial control.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "expenses-reimbursed") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 6,
        maxPossible: 10,
        explanation: "Reimbursing expenses is more characteristic of an employment relationship. Independent contractors typically bear their own business expenses.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Contractors bearing their own expenses supports independent contractor classification and demonstrates financial control.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "payment-method") {
    if (answerStr === "Salary or regular wage") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 10,
        maxPossible: 10,
        explanation: "Regular salary or wages are strongly indicative of an employment relationship. Independent contractors are typically paid by project, commission, or fixed fee.",
        indicator: "employee",
      };
    } else if (answerStr === "Hourly rate") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 5,
        maxPossible: 10,
        explanation: "Hourly payment can indicate employment, though it's not definitive. Project-based or commission payments are more characteristic of independent contractors.",
        indicator: "neutral",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Project-based, fixed fee, or commission payments support independent contractor classification, as they allow for profit/loss opportunity.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "profit-loss-opportunity") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The ability to realize profit or loss is a key indicator of independent contractor status. This demonstrates financial control and business-like operations.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 8,
        maxPossible: 10,
        explanation: "The absence of profit/loss opportunity suggests an employment relationship. Independent contractors typically have the opportunity to make a profit or incur a loss based on their business decisions.",
        indicator: "employee",
      };
    }
  }

  if (questionId === "significant-investment") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Significant investment in tools, equipment, or facilities strongly supports independent contractor classification and demonstrates financial control.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 6,
        maxPossible: 10,
        explanation: "Lack of significant investment suggests an employment relationship. Independent contractors typically invest in their own business assets.",
        indicator: "employee",
      };
    }
  }

  if (questionId === "services-available") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Making services available to the general public or other businesses supports independent contractor classification and demonstrates business-like operations.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 5,
        maxPossible: 10,
        explanation: "Services not available to others may indicate an employment relationship, though this factor alone is not definitive.",
        indicator: "neutral",
      };
    }
  }

  if (questionId === "payment-timing") {
    if (answerStr === "Regular intervals (weekly, bi-weekly, monthly)") {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 4,
        maxPossible: 10,
        explanation: "Regular payment intervals can indicate employment, though project-based payments are more characteristic of independent contractors.",
        indicator: "neutral",
      };
    } else {
      return {
        id: questionId,
        category: "financial",
        irsReference: "IRS Publication 15-A, Section 3 - Financial Control",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Payment upon project completion or milestones supports independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  // RELATIONSHIP TYPE FACTORS
  if (questionId === "contract-written") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "A written contract specifying an independent contractor relationship supports proper classification, though the actual relationship factors are more important than the contract language alone.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 5,
        maxPossible: 10,
        explanation: "Lack of a written contract increases risk, as there is no documentation of the intended relationship. However, the actual relationship factors are more important than contract language.",
        indicator: "neutral",
      };
    }
  }

  if (questionId === "other-clients") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The ability to work for other clients strongly supports independent contractor classification and demonstrates lack of exclusivity.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 7,
        maxPossible: 10,
        explanation: "Exclusivity or inability to work for others suggests an employment relationship. Independent contractors typically have the right to work for multiple clients.",
        indicator: "employee",
      };
    }
  }

  if (questionId === "exclusivity") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 8,
        maxPossible: 10,
        explanation: "Exclusivity requirements are strongly indicative of an employment relationship. Independent contractors typically have the right to work for multiple clients.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Lack of exclusivity requirements supports independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "benefits-provided") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 10,
        maxPossible: 10,
        explanation: "Providing benefits like health insurance, paid time off, or retirement plans is a very strong indicator of an employment relationship. Independent contractors typically do not receive employee benefits.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The absence of employee benefits supports independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "relationship-duration") {
    if (answerStr === "More than 3 years") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 6,
        maxPossible: 10,
        explanation: "Long-term relationships can suggest permanence associated with employment, though many independent contractors have ongoing relationships with clients.",
        indicator: "neutral",
      };
    } else if (answerStr === "1 to 3 years") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 3,
        maxPossible: 10,
        explanation: "Moderate-term relationships are neutral. The permanence factor should be evaluated alongside other relationship indicators.",
        indicator: "neutral",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Shorter-term relationships support independent contractor classification, as they suggest project-based rather than permanent employment.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "relationship-permanence") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 7,
        maxPossible: 10,
        explanation: "Permanent, ongoing relationships suggest employment. Independent contractor relationships are typically project-based or for a specific duration.",
        indicator: "employee",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "Project-based or temporary relationships support independent contractor classification.",
        indicator: "contractor",
      };
    }
  }

  if (questionId === "termination-clause") {
    if (answerStr === "yes") {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 0,
        maxPossible: 10,
        explanation: "The ability to terminate without penalty supports independent contractor classification, as it suggests a business-to-business relationship rather than employment.",
        indicator: "contractor",
      };
    } else {
      return {
        id: questionId,
        category: "relationship",
        irsReference: "IRS Publication 15-A, Section 4 - Type of Relationship",
        question: questionText,
        answer: answerStr,
        riskContribution: 4,
        maxPossible: 10,
        explanation: "Penalties for termination may suggest an employment relationship, though this factor alone is not definitive.",
        indicator: "neutral",
      };
    }
  }

  return null;
}

/**
 * Calculate defensible risk score with full audit trail
 */
export function calculateDefensibleRiskScore(
  answers: Record<string, string | string[]>
): DefensibleRiskReport {
  const factors: RiskFactor[] = [];
  
  // Evaluate each question
  for (const question of complianceQuestions) {
    if (question.category && question.category !== "administrative") {
      const answer = answers[question.id];
      if (answer) {
        const factor = evaluateFactor(question.id, answer, question.text);
        if (factor) {
          factors.push(factor);
        }
      }
    }
  }

  // Calculate category scores
  const behavioralFactors = factors.filter(f => f.category === "behavioral");
  const financialFactors = factors.filter(f => f.category === "financial");
  const relationshipFactors = factors.filter(f => f.category === "relationship");

  const behavioralScore = Math.min(100, 
    behavioralFactors.reduce((sum, f) => sum + f.riskContribution, 0) / 
    behavioralFactors.reduce((sum, f) => sum + f.maxPossible, 0) * 100
  );

  const financialScore = Math.min(100,
    financialFactors.reduce((sum, f) => sum + f.riskContribution, 0) / 
    financialFactors.reduce((sum, f) => sum + f.maxPossible, 0) * 100
  );

  const relationshipScore = Math.min(100,
    relationshipFactors.reduce((sum, f) => sum + f.riskContribution, 0) / 
    relationshipFactors.reduce((sum, f) => sum + f.maxPossible, 0) * 100
  );

  // Calculate overall score (weighted average)
  const weights = {
    behavioral: 0.35,
    financial: 0.35,
    relationship: 0.30,
  };

  const overallScore = Math.round(
    behavioralScore * weights.behavioral +
    financialScore * weights.financial +
    relationshipScore * weights.relationship
  );

  // Determine risk level
  let level: 'low' | 'medium' | 'high';
  if (overallScore <= 30) {
    level = "low";
  } else if (overallScore <= 60) {
    level = "medium";
  } else {
    level = "high";
  }

  // Generate summary
  const employeeIndicators = factors.filter(f => f.indicator === "employee").length;
  const contractorIndicators = factors.filter(f => f.indicator === "contractor").length;
  
  const summary = `Based on ${factors.length} factors evaluated, this relationship shows ${employeeIndicators} employee indicators and ${contractorIndicators} independent contractor indicators. ` +
    `The overall misclassification risk score is ${overallScore}/100 (${level.toUpperCase()} RISK). ` +
    `Behavioral control factors: ${Math.round(behavioralScore)}/100, ` +
    `Financial control factors: ${Math.round(financialScore)}/100, ` +
    `Relationship type factors: ${Math.round(relationshipScore)}/100.`;

  return {
    score: overallScore,
    level,
    factors,
    summary,
    generatedAt: new Date().toISOString(),
    version: ENGINE_VERSION,
    behavioralScore: Math.round(behavioralScore),
    financialScore: Math.round(financialScore),
    relationshipScore: Math.round(relationshipScore),
  };
}

