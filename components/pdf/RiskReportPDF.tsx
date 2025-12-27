"use client";

import { Page, Text, View } from '@react-pdf/renderer';
import { DefensibleRiskReport } from '@/types/compliance';

export function RiskReportPDF({ report }: { report: DefensibleRiskReport }) {
  return (
    <Page size="A4">
      <View>
        <Text>1099 Misclassification Risk Assessment</Text>
      </View>
    </Page>
  );
}
