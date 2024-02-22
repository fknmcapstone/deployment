/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";
import ToTopButton from "./reveal";

import chartData from "./charts.json";
import { JSX } from "react";

let NUM_CHARTS = 0;
for (var category of chartData) {
  NUM_CHARTS += category.charts.length;
}

function shortcutMenuList() {
  let shortcuts: JSX.Element[] = [];

  chartData.forEach((categoryData) => {
    const { category, charts } = categoryData;

    shortcuts.push(
      <p
        key={category}
        data-cy={"shortcut_" + category + "_header"}
        className={styles.shortcutCategoryHeader}
      >
        {category}
      </p>,
      <div
        key={`${category}-separator`}
        className={styles.shortcutMenuSeparator}
      />
    );

    charts.forEach((chart) => {
      shortcuts.push(
        <Link key={chart.name} href={`#${category}${chart.name}`}>
          {chart.name}
        </Link>
      );
    });

    shortcuts.push(
      <p key={`${category}-spacing`} className={styles.spacing}></p>
    );
  });

  return shortcuts;
}

function chartList() {
  let charts: JSX.Element[] = [];

  chartData.forEach((categoryData) => {
    const { category, charts: categoryCharts } = categoryData;

    charts.push(
      <div
        key={`${category}`}
        id={`${category}`}
        data-cy={"chart_" + category + "_header"}
        className={styles.chartCategoryHeader}
      >
        {category}
      </div>,
      <div
        key={`${category}-separator`}
        className={styles.shortcutMenuSeparator}
      />
    );

    categoryCharts.forEach((chart) => {
      charts.push(
        <div
          key={`${category}${chart.name}`}
          data-cy={`${category}${chart.name}`}
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
  });

  return charts;
}

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <ToTopButton />

      <h1
        className={styles.fixedMenuContainer}
        style={{ height: 36 * NUM_CHARTS + "rem" }}
      >
        <div data-cy="shortcut_menu" className={styles.shortcutMenu}>
          {shortcutMenuList()}
        </div>
      </h1>

      <div className={styles.chartColumn}>{chartList()}</div>
    </main>
  );
}
