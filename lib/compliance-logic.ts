import { Question } from "@/types/compliance";

/**
 * 20 questions mapped to IRS three-factor test for misclassification risk assessment
 * Categories:
 * - Behavioral Control (6 questions): Instructions, training, evaluation, location control
 * - Financial Control (7 questions): Investment, expenses, payment method, profit/loss opportunity
 * - Relationship Type (7 questions): Permanence, exclusivity, benefits, contracts
 */
export const complianceQuestions: Question[] = [
  // BEHAVIORAL CONTROL FACTORS (IRS Factor 1)
  {
    id: "work-location",
    text: "Where does this person primarily perform the work?",
    type: "select",
    options: [
      "At their own location or remotely",
      "At your business location",
      "Mix of both",
      "I'm not sure",
    ],
    required: true,
    category: "behavioral",
  },
  {
    id: "work-schedule",
    text: "Can this person set their own schedule and work hours?",
    type: "yes-no",
    required: true,
    category: "behavioral",
  },
  {
    id: "supervision",
    text: "Do you provide detailed instructions or closely supervise how the work is done?",
    type: "yes-no",
    required: true,
    category: "behavioral",
  },
  {
    id: "training-provided",
    text: "Do you provide training on how to perform the work?",
    type: "yes-no",
    required: true,
    category: "behavioral",
  },
  {
    id: "work-sequence",
    text: "Do you control the order or sequence in which work is performed?",
    type: "yes-no",
    required: true,
    category: "behavioral",
  },
  {
    id: "evaluation-method",
    text: "How do you evaluate the quality of work performed?",
    type: "select",
    options: [
      "Only evaluate final result/product",
      "Evaluate process and methods used",
      "Ongoing performance reviews",
      "I'm not sure",
    ],
    required: true,
    category: "behavioral",
  },
  
  // FINANCIAL CONTROL FACTORS (IRS Factor 2)
  {
    id: "tools-provided",
    text: "Do you provide the tools, equipment, or materials needed for the work?",
    type: "yes-no",
    required: true,
    category: "financial",
  },
  {
    id: "expenses-reimbursed",
    text: "Do you reimburse business expenses (travel, supplies, etc.)?",
    type: "yes-no",
    required: true,
    category: "financial",
  },
  {
    id: "payment-method",
    text: "How do you pay this person?",
    type: "select",
    options: [
      "Per project or fixed fee",
      "Hourly rate",
      "Commission or percentage",
      "Salary or regular wage",
      "Other",
    ],
    required: true,
    category: "financial",
  },
  {
    id: "profit-loss-opportunity",
    text: "Can this person realize a profit or loss based on their business decisions?",
    type: "yes-no",
    required: true,
    category: "financial",
  },
  {
    id: "significant-investment",
    text: "Does this person have a significant investment in their own tools, equipment, or facilities?",
    type: "yes-no",
    required: true,
    category: "financial",
  },
  {
    id: "services-available",
    text: "Does this person make their services available to the general public or other businesses?",
    type: "yes-no",
    required: true,
    category: "financial",
  },
  {
    id: "payment-timing",
    text: "When do you pay for completed work?",
    type: "select",
    options: [
      "Upon project completion or milestone",
      "Regular intervals (weekly, bi-weekly, monthly)",
      "As work is performed",
      "I'm not sure",
    ],
    required: true,
    category: "financial",
  },
  
  // RELATIONSHIP TYPE FACTORS (IRS Factor 3)
  {
    id: "contract-written",
    text: "Do you have a written contract or agreement that specifies an independent contractor relationship?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  {
    id: "other-clients",
    text: "Can this person work for other clients or customers?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  {
    id: "exclusivity",
    text: "Is this person required to work exclusively for your business?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  {
    id: "benefits-provided",
    text: "Do you provide benefits like health insurance, paid time off, or retirement plans?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  {
    id: "relationship-duration",
    text: "How long has this working relationship existed?",
    type: "select",
    options: [
      "Less than 6 months",
      "6 months to 1 year",
      "1 to 3 years",
      "More than 3 years",
      "I'm not sure",
    ],
    required: true,
    category: "relationship",
  },
  {
    id: "relationship-permanence",
    text: "Is this relationship expected to be ongoing and permanent?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  {
    id: "termination-clause",
    text: "Can either party terminate the relationship at any time without penalty?",
    type: "yes-no",
    required: true,
    category: "relationship",
  },
  
  // ADMINISTRATIVE QUESTIONS (for form determination)
  {
    id: "payment-type",
    text: "What type of payment are you making?",
    type: "select",
    options: [
      "Services (work performed)",
      "Rent or lease payments",
      "Royalties",
      "Prizes or awards",
      "Other income",
      "I'm not sure",
    ],
    required: true,
    category: "administrative",
  },
  {
    id: "payment-amount",
    text: "How much are you paying this person or business in total for the year?",
    type: "select",
    options: [
      "Less than $600",
      "$600 or more",
      "I'm not sure",
    ],
    required: true,
    category: "administrative",
  },
  {
    id: "w9-collected",
    text: "Have you collected a completed W-9 form from this payee?",
    type: "yes-no",
    required: true,
    category: "administrative",
  },
];

