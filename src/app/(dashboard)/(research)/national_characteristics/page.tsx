/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "../intake_visuals/page.module.css";
import { ToTopButton } from "../../common_elements";
import chartData from "./charts.json";
import { chartList } from "../intake_visuals/common_visual_elements";
import { motion } from "framer-motion";
import { useState } from "react";

const pageTitle = "National Characteristics";

const tabsConfig = {
  mealTypes: {
    id: "mealTypes",
    label: "Meal Types",
    chartName: "Meals Provided & How They Are Served",
  },
  support: {
    id: "support",
    label: "Support & Education",
    chartName: "School Meal Prep Facilities & Nutrition Education",
  },
  funding: {
    id: "funding",
    label: "Payment & Funding",
    chartName: "How School Meals Are Paid For",
  },
  operations: {
    id: "operations",
    label: "Operations",
    chartName: "How School Meal Programs Work",
  },
  determinants: {
    id: "determinants",
    label: "Food Determinants",
    chartName: "What Affects Food Choices in Schools",
  },
};

const tabs = Object.values(tabsConfig);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export default function NationalCharacteristics() {
  const [activeTab, setActiveTab] = useState("mealTypes");

  // Filter charts based on active tab
  const getTabCharts = () => {
    const allCharts = chartData[pageTitle].charts;
    const activeTabInfo = tabsConfig[activeTab as keyof typeof tabsConfig];

    if (!activeTabInfo) return [];

    return allCharts.filter((chart) => chart.name === activeTabInfo.chartName);
  };

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToTopButton />
      <title>National Characteristics of SFPs</title>

      <div className={styles.pageContainer}>
        <section className={styles.content}>
          <motion.div {...fadeIn} transition={{ delay: 0.3, duration: 0.7 }}>
            <h1 className={styles.title}>{chartData[pageTitle].category}</h1>
            <p className={styles.subtext}>{chartData[pageTitle].subtitle}</p>
          </motion.div>

          <div className={styles.stickyTabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            className={styles.horizontalScroll}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {chartList(chartData[pageTitle].category, getTabCharts())}
          </motion.div>
        </section>
      </div>
    </motion.main>
  );
}
