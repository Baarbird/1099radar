"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { DefensibleRiskReport } from "@/types/compliance";
import { RiskReportPDF } from "./RiskReportPDF";

interface PDFDownloadButtonProps {
  report: DefensibleRiskReport;
}

export function PDFDownloadButton({ report }: PDFDownloadButtonProps) {
  const fileName = `1099-risk-assessment-${new Date(report.generatedAt).toISOString().split("T")[0]}.pdf`;
  
  return (
    <PDFDownloadLink
      document={<RiskReportPDF report={report} />}
      fileName={fileName}
      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
    >
      {({ loading }) => (loading ? "Generating PDF..." : "Download PDF Report")}
    </PDFDownloadLink>
  );
}

