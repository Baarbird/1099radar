"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { DefensibleRiskReport } from "@/types/compliance";
import { RiskReportPDF } from "@/components/pdf/RiskReportPDF";

/**
 * Generate PDF download link component
 */
export function generatePDFDownloadLink(report: DefensibleRiskReport) {
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

/**
 * Generate PDF blob for programmatic download
 */
export async function generatePDFBlob(report: DefensibleRiskReport): Promise<Blob> {
  const { pdf } = await import("@react-pdf/renderer");
  const doc = <RiskReportPDF report={report} />;
  const blob = await pdf(doc).toBlob();
  return blob;
}

