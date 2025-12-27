"use client";

import { DefensibleRiskReport } from "@/types/compliance";

/**
 * Generate PDF blob for programmatic download
 */
export async function generatePDFBlob(report: DefensibleRiskReport): Promise<Blob> {
  const { pdf } = await import("@react-pdf/renderer");
  const { RiskReportPDF } = await import("@/components/pdf/RiskReportPDF");
  const React = await import("react");
  const doc = React.createElement(RiskReportPDF, { report });
  const blob = await pdf(doc).toBlob();
  return blob;
}

