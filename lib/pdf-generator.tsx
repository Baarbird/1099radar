"use client";

import React from "react";
import { pdf, Document } from "@react-pdf/renderer";
import { RiskReportPDF } from "@/components/pdf/RiskReportPDF";
import { DefensibleRiskReport } from "@/types/compliance";

export async function generatePdf(report: DefensibleRiskReport) {
  const doc = (
    <Document>
      <RiskReportPDF report={report} />
    </Document>
  );

  const blob = await pdf(doc).toBlob();
  return blob;
}

