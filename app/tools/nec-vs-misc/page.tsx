import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CheckCircle2 } from "lucide-react";

export default function NECvsMISCPage() {
  return (
    <div className="container px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src="https://assets.manypixels.co/illustrations/documents" 
              alt="Documents illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">1099-NEC vs 1099-MISC</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Not sure which form to use? Here's a clear breakdown of when to use each form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-6 w-6 text-foreground/60" />
                <CardTitle className="text-2xl font-semibold">Form 1099-NEC</CardTitle>
              </div>
              <Badge variant="default" className="font-medium">Non-Employee Compensation</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed">
                Use this form for payments made to independent contractors for services.
              </CardDescription>
              <div className="space-y-3">
                <h4 className="font-semibold text-base">When to use:</h4>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                  <li>Payments for services performed by non-employees</li>
                  <li>Independent contractor payments</li>
                  <li>Freelancer payments</li>
                  <li>Consultant fees</li>
                </ul>
              </div>
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold text-base">Threshold:</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Required if payments total $600 or more for the year
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/40 hover:border-border transition-all duration-200 hover:shadow-sm bg-card/50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="h-6 w-6 text-foreground/60" />
                <CardTitle className="text-2xl font-semibold">Form 1099-MISC</CardTitle>
              </div>
              <Badge variant="secondary" className="font-medium">Miscellaneous Income</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-base leading-relaxed">
                Use this form for other types of income payments, not for services.
              </CardDescription>
              <div className="space-y-3">
                <h4 className="font-semibold text-base">When to use:</h4>
                <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed ml-2">
                  <li>Rent or lease payments</li>
                  <li>Royalties</li>
                  <li>Prizes or awards</li>
                  <li>Other income (not services)</li>
                </ul>
              </div>
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold text-base">Threshold:</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Varies by payment type (typically $600 or more)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border/40 bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-foreground/60" />
              <CardTitle className="text-xl font-semibold">Quick Decision Guide</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-base font-semibold">Ask yourself:</p>
              <ol className="list-decimal list-inside space-y-3 text-base text-muted-foreground leading-relaxed ml-2">
                <li>Is this payment for <strong className="font-semibold">services or work performed</strong>? → Use 1099-NEC</li>
                <li>Is this payment for <strong className="font-semibold">rent, royalties, or prizes</strong>? → Use 1099-MISC</li>
                <li>Is the total payment <strong className="font-semibold">less than $600</strong>? → No form needed</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

