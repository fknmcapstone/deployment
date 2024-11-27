/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import ToTopButton from "./../../common_elements";
import { shortcutMenuList } from "./common_visual_elements";
import chartData from "./charts.json";

const pageTitle = "National Characteristics";

export default function NationalCharacteristics() {
  return (
    <main className={styles.main}>
      <ToTopButton />
      <title>National Characteristics of SFPs</title>

      <div className={styles.menuColumn}>
        {shortcutMenuList(chartData[pageTitle])}
      </div>

      <div className={styles.chartColumn}>
        <div className={styles.title} data-cy="category_title">
          {chartData[pageTitle].category}
        </div>
        <div className={styles.subtext} data-cy="category_subtext">
          {chartData[pageTitle].subtitle}
        </div>

        {chartData[pageTitle].charts.map((chart) => (
          <div 
            key={chart.name} 
            id={`${chartData[pageTitle].category.replace(/ /g, "_")}${chart.name.replace(/ /g, "_").replace(/[^a-zA-Z ]/g, "")}`}
            className={styles.chartArea}
          >
            <iframe
              data-cy="chart_frame"
              title={`${chartData[pageTitle].category} - ${chart.name}`}
              width="100%"
              height="118%"
              src={chart.url}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </main>
  );
}