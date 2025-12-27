"use client";

import { useState } from "react";
import { DefensibleRiskReport } from "@/types/compliance";
import { generatePdf } from "@/lib/pdf-generator";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFDownloadButtonProps {
  report: DefensibleRiskReport;
}

export function PDFDownloadButton({ report }: PDFDownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await generatePdf(report);
      const url = URL.createObjectURL(blob);
      const fileName = `1099-risk-assessment-${new Date(report.generatedAt).toISOString().split("T")[0]}.pdf`;
      
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 px-4 py-2"
    >
      <Download className="h-4 w-4" />
      {loading ? "Generating PDF..." : "Download PDF Report"}
    </Button>
  );
}

