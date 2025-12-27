export type FederalTopic = "classification" | "forms" | "deadlines" | "penalties" | "requirements";

export interface FederalRuleContent {
  id: FederalTopic;
  title: string;
  shortTitle: string;
  description: string;
  content: {
    introduction: string;
    sections: Array<{
      heading: string;
      text: string;
      bullets?: string[];
    }>;
  };
  imageUrl: string;
}

export const federalRulesContent: Record<FederalTopic, FederalRuleContent> = {
  classification: {
    id: "classification",
    title: "Classification",
    shortTitle: "Classification",
    description: "Understanding contractor vs employee classification",
    content: {
      introduction: "The IRS uses a three-factor test to determine if a worker is an independent contractor or an employee. Misclassification can result in significant penalties and back taxes.",
      sections: [
        {
          heading: "Behavioral Control",
          text: "This factor examines whether the business has the right to direct and control how the work is done.",
          bullets: [
            "Instructions provided on when, where, and how to work",
            "Training provided on methods to perform the work",
            "Evaluation systems that measure how the work is performed",
            "Degree of instruction - more instruction suggests employee status"
          ]
        },
        {
          heading: "Financial Control",
          text: "This factor looks at whether the business has the right to control the economic aspects of the worker's job.",
          bullets: [
            "Significant investment in equipment or facilities",
            "Unreimbursed expenses",
            "Opportunity for profit or loss",
            "Services available to the relevant market",
            "Method of payment (flat fee vs hourly wage)"
          ]
        },
        {
          heading: "Relationship Type",
          text: "This factor considers how the business and worker perceive their relationship.",
          bullets: [
            "Written contracts describing the relationship",
            "Benefits provided (insurance, vacation, etc.)",
            "Permanency of the relationship",
            "Services provided as a key activity of the business"
          ]
        },
        {
          heading: "Key Takeaway",
          text: "No single factor determines classification. The IRS looks at the entire relationship. When in doubt, consult with a tax professional to avoid costly misclassification penalties."
        }
      ]
    },
    imageUrl: "https://assets.manypixels.co/illustrations/team"
  },
  forms: {
    id: "forms",
    title: "Forms",
    shortTitle: "Forms",
    description: "Which 1099 forms to use and when",
    content: {
      introduction: "The IRS requires businesses to file specific forms when paying independent contractors. The form you use depends on the type of payment made.",
      sections: [
        {
          heading: "Form 1099-NEC",
          text: "Use Form 1099-NEC (Nonemployee Compensation) for payments made to independent contractors for services.",
          bullets: [
            "Required for payments of $600 or more in a calendar year",
            "Used for services performed by non-employees",
            "Includes payments to freelancers, consultants, and independent contractors",
            "Must be filed by January 31st for the previous tax year",
            "Both Copy A (to IRS) and Copy B (to contractor) due by January 31st"
          ]
        },
        {
          heading: "Form 1099-MISC",
          text: "Use Form 1099-MISC (Miscellaneous Income) for other types of payments, not for services.",
          bullets: [
            "Rent payments of $600 or more",
            "Royalties of $10 or more",
            "Prizes and awards",
            "Other income payments (not services)",
            "Paper filing deadline: February 28th",
            "Electronic filing deadline: March 31st"
          ]
        },
        {
          heading: "Form W-9",
          text: "Before making payments, collect Form W-9 from the contractor to get their Taxpayer Identification Number (TIN).",
          bullets: [
            "Required before first payment",
            "Provides contractor's name, address, and TIN",
            "Needed to complete 1099 forms",
            "Keep on file for your records"
          ]
        },
        {
          heading: "Filing Requirements",
          text: "Electronic filing is required if you file 250 or more forms. Smaller filers can use paper forms, but electronic filing is faster and more reliable."
        }
      ]
    },
    imageUrl: "https://assets.manypixels.co/illustrations/documents"
  },
  deadlines: {
    id: "deadlines",
    title: "Deadlines",
    shortTitle: "Deadlines",
    description: "Important filing deadlines for 1099 forms",
    content: {
      introduction: "Missing 1099 filing deadlines can result in significant penalties. It's crucial to understand when forms are due to both the IRS and contractors.",
      sections: [
        {
          heading: "January 31st - 1099-NEC Deadline",
          text: "This is the most important deadline for most businesses using contractors.",
          bullets: [
            "File Copy A of Form 1099-NEC with the IRS",
            "Send Copy B to the contractor",
            "Applies to all 1099-NEC forms for the previous tax year",
            "No extensions available for this deadline"
          ]
        },
        {
          heading: "February 28th - 1099-MISC Paper Filing",
          text: "If you file 1099-MISC forms on paper, they must be received by the IRS by this date.",
          bullets: [
            "Only applies to paper-filed 1099-MISC forms",
            "Must account for mailing time",
            "Consider electronic filing to avoid mailing delays"
          ]
        },
        {
          heading: "March 31st - 1099-MISC Electronic Filing",
          text: "If you file 1099-MISC forms electronically, they must be filed by this date.",
          bullets: [
            "Applies to electronically filed 1099-MISC forms",
            "More time than paper filing",
            "Electronic filing is required for 250+ forms"
          ]
        },
        {
          heading: "Year-Round Preparation",
          text: "Don't wait until January to prepare. Track payments throughout the year, collect W-9 forms early, and prepare your 1099 forms in December to avoid last-minute rush and potential errors."
        }
      ]
    },
    imageUrl: "https://assets.manypixels.co/illustrations/calendar"
  },
  penalties: {
    id: "penalties",
    title: "Penalties",
    shortTitle: "Penalties",
    description: "Penalty structure for late or incorrect filings",
    content: {
      introduction: "The IRS imposes significant penalties for late, incorrect, or missing 1099 forms. Understanding the penalty structure can help you avoid costly mistakes.",
      sections: [
        {
          heading: "Late Filing Penalties",
          text: "Penalties increase based on how late the filing is:",
          bullets: [
            "30 days or less: $60 per form (minimum $630 per year)",
            "31 days to August 1: $120 per form (minimum $1,260 per year)",
            "After August 1: $310 per form (minimum $3,100 per year)"
          ]
        },
        {
          heading: "Failure to Furnish to Recipient",
          text: "If you don't send Copy B to the contractor by the deadline:",
          bullets: [
            "$310 per form",
            "No minimum penalty",
            "Separate from late filing penalties",
            "Can be waived if you can show reasonable cause"
          ]
        },
        {
          heading: "Intentional Disregard",
          text: "If the IRS determines you intentionally disregarded the filing requirements:",
          bullets: [
            "$630 per form",
            "No minimum penalty",
            "Applies to all forms",
            "Cannot be waived"
          ]
        },
        {
          heading: "Penalty Waivers",
          text: "Penalties may be waived if you can show reasonable cause. Common reasons include fires, natural disasters, or death of a key employee. You must file Form 1099 as soon as possible and provide documentation of the reasonable cause."
        }
      ]
    },
    imageUrl: "https://assets.manypixels.co/illustrations/warning"
  },
  requirements: {
    id: "requirements",
    title: "Requirements",
    shortTitle: "Requirements",
    description: "General requirements for 1099 contractor engagements",
    content: {
      introduction: "To properly engage with independent contractors, you must meet several federal requirements. Following these requirements helps ensure compliance and avoids penalties.",
      sections: [
        {
          heading: "Payment Threshold",
          text: "You must file 1099 forms if payments to a contractor total $600 or more in a calendar year.",
          bullets: [
            "Applies to cumulative payments throughout the year",
            "Track all payments, not just individual transactions",
            "Includes all forms of payment (cash, check, ACH, etc.)",
            "Threshold applies per contractor, not per project"
          ]
        },
        {
          heading: "Documentation Requirements",
          text: "Maintain proper documentation for all contractor relationships:",
          bullets: [
            "Form W-9 from each contractor",
            "Written contracts outlining the relationship",
            "Payment records and receipts",
            "Documentation of why they're classified as contractors",
            "Keep records for at least 4 years"
          ]
        },
        {
          heading: "Contractor vs Employee",
          text: "Ensure workers are properly classified as independent contractors, not employees. Key indicators include:",
          bullets: [
            "Contractor controls how work is performed",
            "Contractor provides own tools and equipment",
            "Contractor can work for multiple clients",
            "No benefits provided (health insurance, PTO, etc.)",
            "Contractor responsible for own taxes"
          ]
        },
        {
          heading: "Best Practices",
          text: "To maintain compliance:",
          bullets: [
            "Collect W-9 forms before first payment",
            "Track all payments throughout the year",
            "Review classification annually",
            "File forms on time",
            "Keep detailed records",
            "Consult with tax professionals when uncertain"
          ]
        }
      ]
    },
    imageUrl: "https://assets.manypixels.co/illustrations/checklist"
  }
};

