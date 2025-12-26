import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";

interface RiskScoreProps {
  score: number; // 0-10
  explanation: string;
}

export function RiskScore({ score, explanation }: RiskScoreProps) {
  const getScoreColor = () => {
    if (score <= 3) return "text-green-600";
    if (score <= 6) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = () => {
    if (score <= 3) return "bg-green-100";
    if (score <= 6) return "bg-yellow-100";
    return "bg-red-100";
  };

  const getScoreLabel = () => {
    if (score <= 3) return "Low Risk";
    if (score <= 6) return "Moderate Risk";
    return "High Risk";
  };

  const getScoreIcon = () => {
    if (score <= 3) return CheckCircle2;
    if (score <= 6) return AlertTriangle;
    return AlertCircle;
  };

  const Icon = getScoreIcon();
  const percentage = (score / 10) * 100;

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Compliance Risk Score</CardTitle>
          <Badge
            variant="outline"
            className={`${getScoreColor()} ${getScoreBgColor()} border-0`}
          >
            <Icon className="mr-1 h-3 w-3" />
            {getScoreLabel()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Score: {score.toFixed(1)} / 10</span>
            <span className="text-muted-foreground">{Math.round(percentage)}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>
        <CardDescription className="text-base leading-relaxed">
          {explanation}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

