/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";
import ToTopButton from "../../common_elements";

import chartData from "./charts.json";
import { JSX } from "react";

let NUM_CHARTS = 0;
for (const category of chartData) {
  NUM_CHARTS += category.charts.length;
}

function shortcutMenuList() {
  const shortcuts: JSX.Element[] = [];

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
        <Link
          key={chart.name.replace(/ /g, "_").replace(/[^a-zA-Z ]/g, "")}
          href={`#${category.replace(/ /g, "_")}${chart.name
            .replace(/ /g, "_")
            .replace(/[^a-zA-Z ]/g, "")}`}
        >
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
  const charts: JSX.Element[] = [];

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
      <div data-cy="mobile_shortcut_menu" className={styles.mobileShortcutMenu}>
        {shortcutMenuList()}
      </div>

      <div className={styles.chartColumn}>{chartList()}</div>
    </main>
  );
}
