/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";

enum Column {
  LEFT,
  RIGHT,
}

function GraphCard({
  id,
  column,
  title,
  src,
}: {
  id: string;
  column: Column;
  title: string;
  src: string;
}) {
  return (
    <div
      id={id}
      data-cy={id}
      className={[
        column == Column.LEFT ? styles.columnLeft : styles.columnRight,
        styles.card,
      ].join(" ")}
    >
      <iframe
        title={title}
        src={src}
        allowFullScreen
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
const graphs = [
  {
    title: "Component",
    src: "https://app.powerbi.com/view?r=eyJrIjoiOGM3ZGNmMWQtYTA2MC00ZGMwLTg5NmItOTNmNGM2M2JhMGE0IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  },
  {
    title: "Method",
    src: "https://app.powerbi.com/view?r=eyJrIjoiZjM5M2FkMjgtNmYwOC00NTZjLWE3ODktOGQ4YTY3NWNlZjczIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  },
  {
    title: "Socio Economic Factor",
    src: "https://app.powerbi.com/view?r=eyJrIjoiMTNlYTkzM2ItMThjMi00YjcwLTllNGItMzVjYTc5MWQ2ODJiIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  },
  {
    title: "Dimension",
    src: "https://app.powerbi.com/view?r=eyJrIjoiNTQ4YTg2YWQtNWRhZS00MDBlLWFhYmUtODlhODk4MGYyNGJjIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  },
];
const linkList = graphs.map((graph, index) => {
  return [
    <p>&#8226;</p>,
    <Link href={"#" + graph.title.split(" ").pop()}>
      Programs by {graph.title}
    </Link>,
  ];
});

const graphCardList = graphs.map((graph, index) => {
  const column = index % 2 == 0 ? Column.LEFT : Column.RIGHT;
  return (
    <GraphCard
      id={"" + graph.title.split(" ").join("_").toLowerCase()}
      column={column}
      title={"Number of Programs by " + graph.title}
      src={graph.src}
    />
  );
});

export default function MeasurementToolAssessment() {
  return (
    <main className={styles.main}>
      <title>Measurement Tool Assessment</title>
      <h1 className={styles.title}>
        <p data-cy="title">Measurement Tool Assessment</p>
      </h1>
      <div className={styles.map}>
        <iframe
          data-cy="chart_frame"
          title="Track_3_Map"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDUxMmU5MmYtZGVlMi00MzZmLTljMjctYjI0MjBjMGQ5OTI2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
        <div className={styles.greyRectangle}></div> {/* grey rectangle */}
      </div>

      <div className={styles.subtext1}>
        <p data-cy="blurb1">
          A comprehensive assessment of the dimensions of school food
          environments and determinants of student eating behaviours at school
          captured by existing measurement tools provided insight into the
          development of an appropriate and feasible measurement tool to assess
          Canadian school food environments, as well as key factors to consider
          and implement in the forthcoming national SFP. This review explored
          the dimensions of school food environments and determinants of student
          food and nutrition behaviour as captured by existing measurement
          tools. <br />
          <br />
          The Canadian context was further explored, investigating whether
          current Canadian school food environments upheld country-specific key
          characteristics recommended by experts. The quality of the measurement
          tools was assessed according to a detailed criteria to determine their
          comprehensiveness, relevance, generalizability, and feasibility.
        </p>
      </div>
      <div className={styles.subtext1_extra}>
        <p data-cy="blurb">
          A comprehensive assessment of the dimensions of school food
          environments and determinants of student eating behaviours at school
          captured by existing measurement tools provided insight into the
          development of an appropriate and feasible measurement tool to assess
          Canadian school food environments, as well as key factors to consider
          and implement in the forthcoming national SFP. This review explored
          the dimensions of school food environments and determinants of student
          food and nutrition behaviour as captured by existing measurement
          tools.
        </p>
      </div>
      <div className={styles.subtext2_extra}>
        <p data-cy="blurb">
          The Canadian context was further explored, investigating whether
          current Canadian school food environments upheld country-specific key
          characteristics recommended by experts. The quality of the measurement
          tools was assessed according to a detailed criteria to determine their
          comprehensiveness, relevance, generalizability, and feasibility.
          <br />
          <br />
          Of the 73 articles included in this review, majority featured tools
          that were rated as either medium or low quality, while only 8 studies
          (11%) used tools rated as high quality. The dimensions and
          determinants captured in the studies varied widely; the physical
          dimension was captured the most and the economic dimension the least.
          The school meal component and the meal-specific factors were
          investigated the most among others in the CDC and Graziose’s
          framework, respectively. <br />
          <br />
          In particular, ‘high quality’ studies commonly used quantitative
          methods and measured more than one dimension. In studies conducted in
          Canada, the physical and sociocultural dimensions were captured by all
          but one of the measurement tools, and only one measurement tool was
          rated as ‘high quality’. When assessed against the key characteristics
          of the Canadian school food environment framework, all Canadian
          studies indicated school food environments address the health
          promoting characteristic, however, none of the measurement tools
          captured the universality characteristic.
        </p>
      </div>
      <div className={styles.subtext2}>
        <p data-cy="blurb2">
          Of the 73 articles included in this review, majority featured tools
          that were rated as either medium or low quality, while only 8 studies
          (11%) used tools rated as high quality. The dimensions and
          determinants captured in the studies varied widely; the physical
          dimension was captured the most and the economic dimension the least.
          The school meal component and the meal-specific factors were
          investigated the most among others in the CDC and Graziose’s
          framework, respectively. <br />
          <br />
          In particular, ‘high quality’ studies commonly used quantitative
          methods and measured more than one dimension. In studies conducted in
          Canada, the physical and sociocultural dimensions were captured by all
          but one of the measurement tools, and only one measurement tool was
          rated as ‘high quality’. When assessed against the key characteristics
          of the Canadian school food environment framework, all Canadian
          studies indicated school food environments address the health
          promoting characteristic, however, none of the measurement tools
          captured the universality characteristic.
        </p>
      </div>
      <div className={styles.chartGrid}>{graphCardList}</div>
    </main>
  );
}
