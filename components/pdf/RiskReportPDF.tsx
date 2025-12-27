"use client";

import { Document, Page, Text, View } from '@react-pdf/renderer';
import { DefensibleRiskReport } from '@/types/compliance';

export function RiskReportPDF({ report }: { report: DefensibleRiskReport }) {
  return (
    <Document>
      <Page size="A4">
        <Text>1099 Misclassification Risk Assessment</Text>
      </Page>
    </Document>
  );
}
