import Link from "next/link";
import { JSX } from "react";
import styles from "./page.module.css";

export function shortcutMenuList(categoryCharts: {
  category: string;
  subtitle: string;
  charts: {
    name: string;
    url: string;
    blurb: string;
  }[];
}) {
  const shortcuts: JSX.Element[] = [];

  shortcuts.push(
    <p
      key={categoryCharts.category}
      data-cy={"shortcut_" + categoryCharts.category + "_header"}
      className={styles.shortcutCategoryHeader}
    >
      {categoryCharts.category} Chart Menu
    </p>,
    <div
      key={`${categoryCharts.category}-separator`}
      className={styles.shortcutMenuSeparator}
    />
  );

  categoryCharts.charts.forEach((chart) => {
    shortcuts.push(
      <Link
        className={styles.chartLink}
        key={chart.name.replace(/ /g, "_").replace(/[^a-zA-Z ]/g, "")}
        href={`#${categoryCharts.category.replace(/ /g, "_")}${chart.name
          .replace(/ /g, "_")
          .replace(/[^a-zA-Z ]/g, "")}`}
      >
        {chart.name}
      </Link>
    );
  });

  return shortcuts;
}

export function chartList(
  category: string,
  jsonCharts: {
    name: string;
    url: string;
    blurb: string;
  }[]
) {
  const charts: JSX.Element[] = [];

  jsonCharts.forEach((chart) => {
    charts.push(
      <div
        id={`${category.replace(/ /g, "_")}${chart.name
          .replace(/ /g, "_")
          .replace(/[^a-zA-Z ]/g, "")}`}
        data-cy={`${category.replace(/ /g, "_")}${chart.name
          .replace(/ /g, "_")
          .replace(/[^a-zA-Z ]/g, "")}`}
        className={styles.chartArea}
      >
        <div className={styles.tooltipContainer}>
          <button data-cy="tooltip_button" className={styles.tooltipButton}>
            i
          </button>
          <div data-cy="tooltip_text" className={styles.tooltip}>
            <p>{chart.blurb}</p>
          </div>
        </div>

        <iframe
          data-cy="chart_frame"
          title={`${category} - ${chart.name}`}
          width="100%"
          height="118%"
          src={chart.url}
          allowFullScreen
        ></iframe>
      </div>
    );
  });

  return charts;
}
