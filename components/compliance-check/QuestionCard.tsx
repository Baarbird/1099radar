"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types/compliance";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuestionCardProps {
  question: Question;
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function QuestionCard({
  question,
  value,
  onChange,
  onNext,
  onBack,
  isFirst,
  isLast,
}: QuestionCardProps) {
  const handleNext = () => {
    if (value !== undefined && value !== "") {
      onNext();
    }
  };

  const canProceed = value !== undefined && value !== "";

  return (
    <Card className="w-full max-w-2xl mx-auto border-2">
      <CardHeader>
        <CardTitle className="text-2xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {question.type === "yes-no" && (
          <RadioGroup
            value={value as string}
            onValueChange={(val) => onChange(val)}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="text-base font-normal cursor-pointer">
                Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="text-base font-normal cursor-pointer">
                No
              </Label>
            </div>
          </RadioGroup>
        )}

        {question.type === "select" && question.options && (
          <Select
            value={value as string}
            onValueChange={(val) => onChange(val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {question.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <div className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isFirst}
            className="flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center"
          >
            {isLast ? "See Results" : "Next"}
            {!isLast && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

