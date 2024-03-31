/* eslint-disable react/react-in-jsx-scope */
import styles from "../page.module.css";
import ToTopButton from "../../../common_elements";

import chartData from "../charts.json";
import { shortcutMenuList, chartList } from "../common_visual_elements";

const pageTitle = "Parents' Opinions";
const NUM_CHARTS = chartData[pageTitle].charts.length;

export default function ParentsOpinions() {
  return (
    <main className={styles.main}>
      <ToTopButton />

      <h1
        className={styles.fixedMenuContainer}
        style={{ height: 33.6 * NUM_CHARTS + "lvw" }}
      >
        <div data-cy="shortcut_menu" className={styles.shortcutMenu}>
          {shortcutMenuList(chartData[pageTitle])}
        </div>
      </h1>
      <div data-cy="mobile_shortcut_menu" className={styles.mobileShortcutMenu}>
        {shortcutMenuList(chartData[pageTitle])}
      </div>

      <div className={styles.chartColumn}>
        <div className={styles.title}>{chartData[pageTitle].category}</div>
        <div className={styles.subtext}>{chartData[pageTitle].subtitle}</div>
        {chartList(chartData[pageTitle].category, chartData[pageTitle].charts)}
      </div>
    </main>
  );
}
