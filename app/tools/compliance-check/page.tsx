"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/components/compliance-check/QuestionCard";
import { ProgressIndicator } from "@/components/compliance-check/ProgressIndicator";
import { ResultsCard } from "@/components/compliance-check/ResultsCard";
import { complianceQuestions } from "@/lib/compliance-logic";
import { calculateDefensibleRiskScore } from "@/lib/risk-engine";
import {
  getReportingForm,
  getMissingItems,
  getNextSteps,
} from "@/lib/risk-scoring";
import { DefensibleRiskReport } from "@/types/compliance";
import { saveAnswers, clearAnswers, loadAnswers } from "@/lib/storage";
import { ArrowRight, Shield } from "lucide-react";
import { UndrawIllustration } from "@/components/shared/UndrawIllustration";

type Step = "welcome" | "questions" | "results";

export default function ComplianceCheckPage() {
  const [step, setStep] = useState<Step>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [riskReport, setRiskReport] = useState<DefensibleRiskReport | null>(null);

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
      // Calculate defensible risk score with audit trail
      const report = calculateDefensibleRiskScore(answers);
      setRiskReport(report);
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
    setRiskReport(null);
    clearAnswers();
  };

  const currentQuestion = complianceQuestions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  if (step === "welcome") {
    return (
      <div className="container px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                <Shield className="h-4 w-4" />
                Risk Assessment
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-foreground leading-[1.1]">
                Defensible <span className="text-primary underline decoration-primary/20 underline-offset-8">Risk</span> Score
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-2xl">
                Answer 20 IRS-aligned questions to get a comprehensive misclassification risk assessment with a downloadable audit trail report.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "0-100 risk score",
                  "IRS factor breakdown",
                  "Defensible audit trail",
                  "Downloadable PDF report"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-border/40">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button onClick={handleStart} size="lg" className="w-full sm:w-auto h-14 px-10 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105">
                  Start Check Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last p-8">
              <UndrawIllustration 
                name="checklist" 
                className="w-full h-auto drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
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

  if (step === "results" && riskReport) {
    // Get additional administrative info
    const reportingForm = getReportingForm(answers);
    const missingItems = getMissingItems(answers);
    
    // Generate next steps based on risk report
    const nextSteps: string[] = [];
    if (riskReport.level === "high") {
      nextSteps.push("Review contractor classification - consider consulting with a tax professional");
      nextSteps.push("Document the independent contractor relationship clearly in writing");
    } else if (riskReport.level === "medium") {
      nextSteps.push("Review contractor classification factors to ensure proper classification");
    }
    if (reportingForm !== "none") {
      nextSteps.push(`Collect a completed W-9 form before making payments (required for ${reportingForm})`);
      nextSteps.push(`File ${reportingForm} by January 31st for the previous tax year`);
    }
    if (missingItems.length > 0) {
      nextSteps.push("Gather missing documentation listed above");
    }
    if (riskReport.score >= 70) {
      nextSteps.push("Consider consulting with a tax professional or accountant for guidance");
    }

    return (
      <div className="container px-6 py-16 md:py-24">
        <ResultsCard
          report={riskReport}
          reportingForm={reportingForm}
          missingItems={missingItems}
          nextSteps={nextSteps}
          onStartOver={handleStartOver}
        />
      </div>
    );
  }

  return null;
}

