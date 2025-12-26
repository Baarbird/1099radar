import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, AlertCircle } from "lucide-react";

export default function ClassificationPage() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contractor vs Employee</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the key differences and classification factors for federal rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Independent Contractor</CardTitle>
              </div>
              <Badge variant="default">1099 Form</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                A person or business that provides services to another entity under terms specified in a contract.
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold">Key characteristics:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Controls how work is performed</li>
                  <li>Sets own schedule</li>
                  <li>Provides own tools and equipment</li>
                  <li>Can work for multiple clients</li>
                  <li>Pays own taxes (self-employment tax)</li>
                  <li>No benefits provided</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Employee</CardTitle>
              </div>
              <Badge variant="secondary">W-2 Form</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                A person who works for an employer under the employer's control and direction.
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold">Key characteristics:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Employer controls how work is done</li>
                  <li>Set schedule by employer</li>
                  <li>Employer provides tools and equipment</li>
                  <li>Typically works for one employer</li>
                  <li>Employer withholds taxes</li>
                  <li>May receive benefits</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <CardTitle>Classification Factors</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                The IRS and Department of Labor consider multiple factors when determining classification. No single factor is determinative, but these are key considerations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Behavioral Control</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>Instructions and training provided</li>
                    <li>Evaluation systems</li>
                    <li>Degree of instruction</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Financial Control</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>Investment in equipment</li>
                    <li>Opportunity for profit/loss</li>
                    <li>Services available to market</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Relationship Type</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                    <li>Written contracts</li>
                    <li>Benefits provided</li>
                    <li>Permanency of relationship</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Important Note</h4>
                  <p className="text-sm text-muted-foreground">
                    Misclassification can result in penalties, back taxes, and legal issues. When in doubt, consult with a tax professional.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

