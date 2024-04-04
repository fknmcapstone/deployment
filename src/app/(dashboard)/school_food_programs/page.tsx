/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client";
import { Card, CardBody } from "@nextui-org/react";
// This directive is required due to a bug with NextUI Accordion
// See: https://github.com/nextui-org/nextui/issues/1403

import styles from "./page.module.css";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const keyOutcomes = [
  "A - Anthropometric",
  "D - Dietary Intake",
  "E - Environment",
  "I - Implementation",
  "KAP - Knowledge, Attitudes and Practices",
  "P - Prevalence",
  "PA - Physical Activity",
  "PR - Promotion and Advertisements",
  "S - Food Sold",
];

const equityIndicators = [
  "A - Age",
  "S - Sex",
  "E - Ethnicity",
  "I - Indigeneity",
  "G - Geography",
  "P - Prevalence",
  "SES - Socioeconomic Status",
];

const qualityAssessment = ["ROB - Risk of Bias"];

const keyOutcomesElementList = keyOutcomes.map((outcome) => {
  return <p data-cy="key_outcomes_item">{outcome}</p>;
});

const equityIndicatorsElementList = equityIndicators.map((indicator) => {
  return <p data-cy="indicator_item">{indicator}</p>;
});

const qualityAssessmentElementList = qualityAssessment.map((assessment) => {
  return <p data-cy="assessment_item">{assessment}</p>;
});

export default function CurrentPrograms() {
  return (
    <main className={styles.main}>
      <div id={styles.aboutText}>
        <p>
          This systematic review aimed to synthesize and appraise literature on
          Canadian school food and nutrition interventions, policies and
          programs and their effects on diets and nutritional status.Overall,
          the literature remains largely heterogenous and primarily focused on
          nutrition education programs which use subjective assessments to infer
          changes in nutrition.
        </p>
      </div>
      <div id={styles.helperText}>
        Hover over the map to see more information.
      </div>
      <div id={styles.map}>
        <div className={styles.tooltipContainer}>
          <button data-cy="tooltip_button" className={styles.tooltipButton}>
            i
          </button>
          <div data-cy="tooltip_text" className={styles.tooltip}>
            <p id={styles.legendTitle}>Legend</p>
            <div id={styles.cardText}>
              <p id={styles.cardTitle}>Key Outcomes</p>
              {keyOutcomesElementList}
            </div>
            <div id={styles.cardText}>
              <p id={styles.cardTitle}>Disaggregated Equity Indicators</p>
              {equityIndicatorsElementList}
              <p id={styles.cardTitle}>Quality Assessment</p>
              {qualityAssessmentElementList}
            </div>
          </div>
        </div>
        <iframe
          data-cy="chart_frame"
          title="School Food Programs"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiYWI1NzhmYzYtYTQwZS00MjIwLWEyNDgtZTFiNDkzZmIzNTNhIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
        <div className={styles.greyRectangle} />
        {/*grey rectangle */}
      </div>
    </main>
  );
}
