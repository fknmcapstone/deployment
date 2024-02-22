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
      className={[
        column == Column.LEFT ? styles.columnLeft : styles.columnRight,
        styles.card,
      ].join(" ")}
    >
      <p>{title}</p>
      <img src={src}></img>
    </div>
  );
}

let graphs = ["Component", "Method", "Socio Economic Factor", "Dimension"];
let linkList = graphs.map((graphTitle, index) => {
  return [
    <p>&#8226;</p>,
    <Link href={"#" + graphTitle.split(" ").pop()}>
      Programs by {graphTitle}
    </Link>,
  ];
});

let graphCardList = graphs.map((graphTitle, index) => {
  let column = index % 2 == 0 ? Column.LEFT : Column.RIGHT;
  return (
    <GraphCard
      id={"" + graphTitle.split(" ").join("_").toLowerCase()}
      column={column}
      title={"Number of Programs by " + graphTitle}
      src="mta_chart_placeholder.png"
    />
  );
});

export default function MeasurementToolAssessment() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <p data-cy="title">Measurement Tool Assessment</p>
      </h1>
      <div id={styles.map}>
        <iframe
          data-cy="chart_frame"
          title="Track_3_Map"
          width="1024"
          height="612"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDUxMmU5MmYtZGVlMi00MzZmLTljMjctYjI0MjBjMGQ5OTI2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className={styles.greyRectangle}></div> {/* grey rectangle */}
      <div className={styles.subtext}>
        <p data-cy="blurb">
        A comprehensive assessment of the dimensions of school food environments and determinants of student eating behaviours at school captured by existing measurement tools provided insight into the development of an appropriate and feasible measurement tool to assess Canadian school food environments, as well as key factors to consider and implement in the forthcoming national SFP. This review explored the dimensions of school food environments and determinants of student food and nutrition behaviour as captured by existing measurement tools. The Canadian context was further explored, investigating whether current Canadian school food environments upheld country-specific key characteristics recommended by experts. The quality of the measurement tools was assessed according to a detailed criteria to determine their comprehensiveness, relevance, generalizability, and feasibility. Of the 73 articles included in this review, majority featured tools that were rated as either medium or low quality, while only 8 studies (11%) used tools rated as high quality. The dimensions and determinants captured in the studies varied widely; the physical dimension was captured the most and the economic dimension the least. The school meal component and the meal-specific factors were investigated the most among others in the CDC and Graziose’s framework, respectively. In particular, ‘high quality’ studies commonly used quantitative methods and measured more than one dimension. In studies conducted in Canada, the physical and sociocultural dimensions were captured by all but one of the measurement tools, and only one measurement tool was rated as ‘high quality’. When assessed against the key characteristics of the Canadian school food environment framework, all Canadian studies indicated school food environments address the health promoting characteristic, however, none of the measurement tools captured the universality characteristic. 




        </p>
      </div>
      <div data-cy="shortcut_menu" className={styles.shortcutMenu}>
        <p className={styles.shortcutMenuTitle}>Shortcuts</p>
        <div className={styles.shortcutMenuList}>{linkList}</div>
      </div>
      {graphCardList}
    </main>
  );
}
