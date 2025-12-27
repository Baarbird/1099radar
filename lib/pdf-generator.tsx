"use client";

import React from "react";
import { pdf } from "@react-pdf/renderer";
import { RiskReportPDF } from "@/components/pdf/RiskReportPDF";
import { DefensibleRiskReport } from "@/types/compliance";

export async function generatePdf(report: DefensibleRiskReport) {
  const doc = <RiskReportPDF report={report} /> as unknown as React.ReactElement;
  const blob = await pdf(doc).toBlob();
  return blob;
}

