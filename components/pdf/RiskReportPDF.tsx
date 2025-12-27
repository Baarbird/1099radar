import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { DefensibleRiskReport } from "@/types/compliance";

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#065f46",
  },
  subtitle: {
    fontSize: 14,
    color: "#059669",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#065f46",
    borderBottom: "2px solid #10b981",
    paddingBottom: 5,
  },
  scoreBox: {
    backgroundColor: "#f0fdf4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    border: "2px solid #10b981",
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#065f46",
    textAlign: "center",
  },
  scoreLabel: {
    fontSize: 14,
    textAlign: "center",
    color: "#059669",
    marginTop: 5,
    textTransform: "uppercase",
  },
  factorRow: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderRadius: 3,
  },
  factorQuestion: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#065f46",
  },
  factorAnswer: {
    fontSize: 10,
    marginBottom: 5,
    color: "#374151",
  },
  factorExplanation: {
    fontSize: 9,
    marginTop: 5,
    color: "#6b7280",
    fontStyle: "italic",
  },
  factorRisk: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  irsReference: {
    fontSize: 8,
    color: "#9ca3af",
    marginTop: 3,
  },
  table: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #e5e7eb",
    paddingVertical: 8,
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: "#f3f4f6",
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 9,
  },
  disclaimer: {
    fontSize: 8,
    color: "#6b7280",
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f9fafb",
    borderLeft: "3px solid #ef4444",
  },
  metadata: {
    fontSize: 8,
    color: "#9ca3af",
    marginTop: 20,
    textAlign: "center",
  },
  categoryHeader: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#059669",
  },
});

function getRiskColor(score: number): string {
  if (score <= 30) return "#10b981"; // green
  if (score <= 60) return "#f59e0b"; // amber
  return "#ef4444"; // red
}

function getRiskLabel(level: "low" | "medium" | "high"): string {
  return level.toUpperCase() + " RISK";
}

// PDF Document Component
export const RiskReportPDF: React.FC<{ report: DefensibleRiskReport }> = ({ report }) => {
  const riskColor = getRiskColor(report.score);
  const riskLabel = getRiskLabel(report.level);

  const behavioralFactors = report.factors.filter((f) => f.category === "behavioral");
  const financialFactors = report.factors.filter((f) => f.category === "financial");
  const relationshipFactors = report.factors.filter((f) => f.category === "relationship");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.title}>1099 Misclassification Risk Assessment</Text>
          <Text style={styles.subtitle}>Defensible Risk Score Report</Text>
        </View>

        {/* Executive Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Executive Summary</Text>
          <View style={styles.scoreBox}>
            <Text style={[styles.scoreValue, { color: riskColor }]}>
              {report.score}
            </Text>
            <Text style={styles.scoreLabel}>{riskLabel}</Text>
          </View>
          <Text style={{ marginBottom: 10 }}>{report.summary}</Text>
          <Text style={styles.metadata}>
            Generated: {new Date(report.generatedAt).toLocaleString()} | Engine Version: {report.version}
          </Text>
        </View>

        {/* Category Scores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category Breakdown</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableCell}>Category</Text>
              <Text style={styles.tableCell}>Score</Text>
              <Text style={styles.tableCell}>Risk Level</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Behavioral Control</Text>
              <Text style={styles.tableCell}>{report.behavioralScore}/100</Text>
              <Text style={styles.tableCell}>
                {report.behavioralScore <= 30 ? "Low" : report.behavioralScore <= 60 ? "Medium" : "High"}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Financial Control</Text>
              <Text style={styles.tableCell}>{report.financialScore}/100</Text>
              <Text style={styles.tableCell}>
                {report.financialScore <= 30 ? "Low" : report.financialScore <= 60 ? "Medium" : "High"}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Type of Relationship</Text>
              <Text style={styles.tableCell}>{report.relationshipScore}/100</Text>
              <Text style={styles.tableCell}>
                {report.relationshipScore <= 30 ? "Low" : report.relationshipScore <= 60 ? "Medium" : "High"}
              </Text>
            </View>
          </View>
        </View>

        {/* Factor-by-Factor Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Factor-by-Factor Analysis</Text>

          {behavioralFactors.length > 0 && (
            <>
              <Text style={styles.categoryHeader}>Behavioral Control Factors</Text>
              {behavioralFactors.map((factor, idx) => (
                <View key={idx} style={styles.factorRow}>
                  <Text style={styles.factorQuestion}>{factor.question}</Text>
                  <Text style={styles.factorAnswer}>Answer: {factor.answer}</Text>
                  <Text style={styles.factorRisk}>
                    Risk Contribution: +{factor.riskContribution} points (of {factor.maxPossible} possible) | 
                    Indicator: {factor.indicator === "employee" ? "Employee" : factor.indicator === "contractor" ? "Contractor" : "Neutral"}
                  </Text>
                  <Text style={styles.irsReference}>{factor.irsReference}</Text>
                  <Text style={styles.factorExplanation}>{factor.explanation}</Text>
                </View>
              ))}
            </>
          )}

          {financialFactors.length > 0 && (
            <>
              <Text style={styles.categoryHeader}>Financial Control Factors</Text>
              {financialFactors.map((factor, idx) => (
                <View key={idx} style={styles.factorRow}>
                  <Text style={styles.factorQuestion}>{factor.question}</Text>
                  <Text style={styles.factorAnswer}>Answer: {factor.answer}</Text>
                  <Text style={styles.factorRisk}>
                    Risk Contribution: +{factor.riskContribution} points (of {factor.maxPossible} possible) | 
                    Indicator: {factor.indicator === "employee" ? "Employee" : factor.indicator === "contractor" ? "Contractor" : "Neutral"}
                  </Text>
                  <Text style={styles.irsReference}>{factor.irsReference}</Text>
                  <Text style={styles.factorExplanation}>{factor.explanation}</Text>
                </View>
              ))}
            </>
          )}

          {relationshipFactors.length > 0 && (
            <>
              <Text style={styles.categoryHeader}>Type of Relationship Factors</Text>
              {relationshipFactors.map((factor, idx) => (
                <View key={idx} style={styles.factorRow}>
                  <Text style={styles.factorQuestion}>{factor.question}</Text>
                  <Text style={styles.factorAnswer}>Answer: {factor.answer}</Text>
                  <Text style={styles.factorRisk}>
                    Risk Contribution: +{factor.riskContribution} points (of {factor.maxPossible} possible) | 
                    Indicator: {factor.indicator === "employee" ? "Employee" : factor.indicator === "contractor" ? "Contractor" : "Neutral"}
                  </Text>
                  <Text style={styles.irsReference}>{factor.irsReference}</Text>
                  <Text style={styles.factorExplanation}>{factor.explanation}</Text>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            IMPORTANT DISCLAIMER
          </Text>
          <Text>
            This risk assessment is provided for informational purposes only and does not constitute legal, tax, or accounting advice. 
            The scoring algorithm is based on IRS Publication 15-A guidelines but cannot replace professional judgment or legal counsel. 
            Classification determinations are fact-specific and may vary based on jurisdiction and circumstances. 
            Consult with qualified legal or tax professionals before making classification decisions.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

