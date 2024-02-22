"use client";
// This directive is required due to a bug with NextUI Accordion
// See: https://github.com/nextui-org/nextui/issues/1403

import styles from "./page.module.css";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

let keyOutcomes = [
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

let equityIndicators = [
  "A - Age",
  "S - Sex",
  "E - Ethnicity",
  "I - Indigeneity",
  "G - Geography",
  "P - Prevalence",
  "SES - Socioeconomic Status",
];

let qualityAssessment = ["ROB - Risk of Bias"];

let keyOutcomesElementList = keyOutcomes.map((outcome) => {
  return <p data-cy="key_outcomes_item">{outcome}</p>;
});

let equityIndicatorsElementList = equityIndicators.map((indicator) => {
  return <p data-cy="indicator_item">{indicator}</p>;
});

let qualityAssessmentElementList = qualityAssessment.map((assessment) => {
  return <p data-cy="assessment_item">{assessment}</p>;
});

export default function CurrentPrograms() {
  return (
    <main className={styles.main}>
      <div id={styles.aboutText}>
        <p>This systematic review aimed to synthesize and appraise literature on Canadian school food and nutrition interventions, policies and programs and their effects on diets and nutritional status.Overall, the literature remains largely heterogenous and primarily focused on nutrition education programs which use subjective assessments to infer changes in nutrition.</p>
      </div>
      <div id={styles.helperText}>
      </div>
      <div data-cy="legend" id={styles.foldableLegend}>
        <p id={styles.legendTitle}>Legend</p>
        <Accordion selectionMode="multiple" className={styles.item}>
          <AccordionItem data-cy="key_outcomes" key="1" title="Key Outcomes">
            {keyOutcomesElementList}
          </AccordionItem>
          <AccordionItem
            data-cy="indicator"
            key="2"
            title="Disaggregated Equity Indicators"
          >
            {equityIndicatorsElementList}
          </AccordionItem>
          <AccordionItem
            data-cy="assessment"
            key="3"
            title="Quality Assessment"
          >
            {qualityAssessmentElementList}
          </AccordionItem>
        </Accordion>
      </div>
      <div id={styles.map}>
        <iframe
          data-cy="chart_frame"
          title="Track_3_Map"
          width="1096"
          height="680"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDUxMmU5MmYtZGVlMi00MzZmLTljMjctYjI0MjBjMGQ5OTI2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className={styles.greyRectangle}></div> {/* grey rectangle */}
    </main>
  );
}
