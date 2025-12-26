import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle2 } from "lucide-react";

export default function NECvsMISCPage() {
  return (
    <div className="container px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">1099-NEC vs 1099-MISC</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure which form to use? Here's a clear breakdown of when to use each form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Form 1099-NEC</CardTitle>
              </div>
              <Badge variant="default">Non-Employee Compensation</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                Use this form for payments made to independent contractors for services.
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold">When to use:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Payments for services performed by non-employees</li>
                  <li>Independent contractor payments</li>
                  <li>Freelancer payments</li>
                  <li>Consultant fees</li>
                </ul>
              </div>
              <div className="space-y-2 pt-2 border-t">
                <h4 className="font-semibold">Threshold:</h4>
                <p className="text-sm text-muted-foreground">
                  Required if payments total $600 or more for the year
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Form 1099-MISC</CardTitle>
              </div>
              <Badge variant="secondary">Miscellaneous Income</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                Use this form for other types of income payments, not for services.
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold">When to use:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                  <li>Rent or lease payments</li>
                  <li>Royalties</li>
                  <li>Prizes or awards</li>
                  <li>Other income (not services)</li>
                </ul>
              </div>
              <div className="space-y-2 pt-2 border-t">
                <h4 className="font-semibold">Threshold:</h4>
                <p className="text-sm text-muted-foreground">
                  Varies by payment type (typically $600 or more)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 bg-muted/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <CardTitle>Quick Decision Guide</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm font-semibold">Ask yourself:</p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-2">
                <li>Is this payment for <strong>services or work performed</strong>? → Use 1099-NEC</li>
                <li>Is this payment for <strong>rent, royalties, or prizes</strong>? → Use 1099-MISC</li>
                <li>Is the total payment <strong>less than $600</strong>? → No form needed</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

