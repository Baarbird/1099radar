"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/components/compliance-check/QuestionCard";
import { ProgressIndicator } from "@/components/compliance-check/ProgressIndicator";
import { ResultsCard } from "@/components/compliance-check/ResultsCard";
import { complianceQuestions } from "@/lib/compliance-logic";
import {
  calculateRiskFactors,
  calculateRiskScore,
  getRiskExplanation,
  getClassificationRisk,
  getReportingForm,
  getMissingItems,
  getNextSteps,
} from "@/lib/risk-scoring";
import { ComplianceResults } from "@/types/compliance";
import { saveComplianceResults, saveAnswers, clearAnswers, loadAnswers } from "@/lib/storage";
import { ArrowRight } from "lucide-react";

type Step = "welcome" | "questions" | "results";

export default function ComplianceCheckPage() {
  const [step, setStep] = useState<Step>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [results, setResults] = useState<ComplianceResults | null>(null);

  // Load saved answers on mount
  useEffect(() => {
    const savedAnswers = loadAnswers();
    if (savedAnswers && Object.keys(savedAnswers).length > 0) {
      setAnswers(savedAnswers);
      // Optionally auto-resume if user was in the middle
    }
  }, []);

  const handleStart = () => {
    setStep("questions");
    setCurrentQuestionIndex(0);
  };

  const handleAnswerChange = (value: string | string[]) => {
    const question = complianceQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    saveAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < complianceQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      const riskFactors = calculateRiskFactors(answers);
      const riskScore = calculateRiskScore(riskFactors);
      const riskExplanation = getRiskExplanation(riskScore);
      const classificationRisk = getClassificationRisk(answers);
      const reportingForm = getReportingForm(answers);
      const missingItems = getMissingItems(answers);

      const newResults: ComplianceResults = {
        reportingForm,
        classificationRisk,
        riskScore,
        riskExplanation,
        missingItems,
        nextSteps: [],
        answers,
      };

      newResults.nextSteps = getNextSteps(newResults);
      setResults(newResults);
      saveComplianceResults(newResults);
      setStep("results");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartOver = () => {
    setStep("welcome");
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
    clearAnswers();
  };

  const currentQuestion = complianceQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  if (step === "welcome") {
    return (
      <div className="container px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Card className="border border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="text-4xl font-semibold tracking-tight">Free Compliance Check</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                Answer a few simple questions to understand your compliance requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-base">What you'll learn:</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                  <li>Which 1099 form (if any) you need to file</li>
                  <li>Your classification risk level</li>
                  <li>Missing documentation you need to collect</li>
                  <li>Recommended next steps</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button onClick={handleStart} size="lg" className="w-full sm:w-auto h-12">
                  Start Check
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "questions") {
    return (
      <div className="container px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl space-y-8">
          <ProgressIndicator
            current={currentQuestionIndex + 1}
            total={complianceQuestions.length}
          />
          <QuestionCard
            question={currentQuestion}
            value={currentAnswer}
            onChange={handleAnswerChange}
            onNext={handleNext}
            onBack={handleBack}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === complianceQuestions.length - 1}
          />
        </div>
      </div>
    );
  }

  if (step === "results" && results) {
    return (
      <div className="container px-6 py-16 md:py-24">
        <ResultsCard results={results} onStartOver={handleStartOver} />
      </div>
    );
  }

  return null;
}

