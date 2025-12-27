import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, AlertCircle } from "lucide-react";

export default function ClassificationPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src="https://assets.manypixels.co/illustrations/decision" 
              alt="Decision making illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Contractor vs Employee</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understanding the key differences and classification factors for federal rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="h-6 w-6 text-foreground/60" />
                <CardTitle className="text-2xl font-semibold">Independent Contractor</CardTitle>
              </div>
              <Badge variant="default" className="font-medium">1099 Form</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed">
                A person or business that provides services to another entity under terms specified in a contract.
              </CardDescription>
              <div className="space-y-3">
                <h4 className="font-semibold text-base">Key characteristics:</h4>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
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

          <Card className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-6 w-6 text-foreground/60" />
                <CardTitle className="text-2xl font-semibold">Employee</CardTitle>
              </div>
              <Badge variant="secondary" className="font-medium">W-2 Form</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed">
                A person who works for an employer under the employer's control and direction.
              </CardDescription>
              <div className="space-y-3">
                <h4 className="font-semibold text-base">Key characteristics:</h4>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
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

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-foreground/60" />
              <CardTitle className="text-xl font-semibold">Classification Factors</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                The IRS and Department of Labor consider multiple factors when determining classification. No single factor is determinative, but these are key considerations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-base">Behavioral Control</h4>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                    <li>Instructions and training provided</li>
                    <li>Evaluation systems</li>
                    <li>Degree of instruction</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-base">Financial Control</h4>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                    <li>Investment in equipment</li>
                    <li>Opportunity for profit/loss</li>
                    <li>Services available to market</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-base">Relationship Type</h4>
                  <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                    <li>Written contracts</li>
                    <li>Benefits provided</li>
                    <li>Permanency of relationship</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-base">Important Note</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
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

