import { ComplianceResults } from "@/types/compliance";

const STORAGE_KEY = "1099radar_compliance_check";

export function saveComplianceResults(results: ComplianceResults): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }
}

export function loadComplianceResults(): ComplianceResults | null {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as ComplianceResults;
      }
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
  }
  return null;
}

export function clearComplianceResults(): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  }
}

const ANSWERS_STORAGE_KEY = "1099radar_compliance_answers";

export function saveAnswers(answers: Record<string, string | string[]>): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(answers));
    } catch (error) {
      console.error("Failed to save answers to localStorage:", error);
    }
  }
}

export function loadAnswers(): Record<string, string | string[]> | null {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(ANSWERS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as Record<string, string | string[]>;
      }
    } catch (error) {
      console.error("Failed to load answers from localStorage:", error);
    }
  }
  return null;
}

export function clearAnswers(): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(ANSWERS_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear answers from localStorage:", error);
    }
  }
}

