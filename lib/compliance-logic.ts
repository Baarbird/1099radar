import { Question } from "@/types/compliance";

export const complianceQuestions: Question[] = [
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
  },
  {
    id: "payee-type",
    text: "Are you paying an individual person or a business?",
    type: "select",
    options: [
      "Individual person",
      "Business (LLC, corporation, etc.)",
      "I'm not sure",
    ],
    required: true,
  },
  {
    id: "w9-collected",
    text: "Have you collected a completed W-9 form from this payee?",
    type: "yes-no",
    required: true,
  },
  {
    id: "contract-written",
    text: "Do you have a written contract or agreement with this person?",
    type: "yes-no",
    required: true,
  },
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
  },
  {
    id: "tools-provided",
    text: "Do you provide the tools, equipment, or materials needed for the work?",
    type: "yes-no",
    required: true,
  },
  {
    id: "work-schedule",
    text: "Can this person set their own schedule and work hours?",
    type: "yes-no",
    required: true,
  },
  {
    id: "other-clients",
    text: "Can this person work for other clients or customers?",
    type: "yes-no",
    required: true,
  },
  {
    id: "payment-method",
    text: "How do you pay this person?",
    type: "select",
    options: [
      "Per project or fixed fee",
      "Hourly rate",
      "Commission or percentage",
      "Other",
    ],
    required: true,
  },
  {
    id: "supervision",
    text: "Do you provide detailed instructions or closely supervise how the work is done?",
    type: "yes-no",
    required: true,
  },
  {
    id: "benefits-provided",
    text: "Do you provide benefits like health insurance, paid time off, or retirement plans?",
    type: "yes-no",
    required: true,
  },
];

