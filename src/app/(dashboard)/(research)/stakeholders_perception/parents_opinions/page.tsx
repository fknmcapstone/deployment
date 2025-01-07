/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import styles from "../../intake_visuals/page.module.css";
import { ToTopButton } from "../../../common_elements";
import chartData from "../charts.json";
import { chartList } from "../../intake_visuals/common_visual_elements";
import { motion } from "framer-motion";
import { useState } from "react";

const pageTitle = "Parents' Opinions";

const tabsConfig = {
  nutrition: {
    id: "nutrition",
    label: "Nutrition Guidelines",
    chartName: "Menu Aligns with Canada Food Guide",
  },
  cultural: {
    id: "cultural",
    label: "Cultural & Fresh Food",
    chartName: "Importance of Cultural Food",
  },
  portions: {
    id: "portions",
    label: "Portions & Beverages",
    chartName: "Various Food Portions Offered",
  },
  health: {
    id: "health",
    label: "Health Considerations",
    chartName: "Low-Sugar, Low-Salt, Low-Fat Meals",
  },
  accessibility: {
    id: "accessibility",
    label: "Accessibility",
    chartName: "Free or Low-Cost Meals",
  },
  customization: {
    id: "customization",
    label: "Customization",
    chartName: "Customizable Food Selection",
  },
  education: {
    id: "education",
    label: "Education & Social",
    chartName: "Children Nutrition Education",
  },
  standards: {
    id: "standards",
    label: "Standards & Feedback",
    chartName: "Canadian Nutritional Standards",
  },
};

const tabs = Object.values(tabsConfig);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export default function ParentsOpinions() {
  const [activeTab, setActiveTab] = useState("nutrition");

  // Filter charts based on active tab
  const getTabCharts = () => {
    const allCharts = chartData[pageTitle].charts;
    const activeTabInfo = tabsConfig[activeTab as keyof typeof tabsConfig];

    if (!activeTabInfo) return [];

    // Get the main chart for the tab
    const mainChart = allCharts.find(
      (chart) => chart.name === activeTabInfo.chartName
    );

    // Get related charts based on the active tab
    const relatedCharts = (() => {
      switch (activeTab) {
        case "cultural":
          return allCharts.filter(
            (chart) =>
              chart.name === "Importance of Less Processed Food" ||
              chart.name === "Locally Grown & Sustainable Food"
          );
        case "portions":
          return allCharts.filter(
            (chart) => chart.name === "Meals Coming With a Beverage"
          );
        case "accessibility":
          return allCharts.filter(
            (chart) =>
              chart.name === "Children's Ability to Participate" ||
              chart.name === "SFPs Unique to Childrens' Needs"
          );
        case "customization":
          return allCharts.filter(
            (chart) => chart.name === "Food Accomodations & Flexibility"
          );
        case "education":
          return allCharts.filter(
            (chart) =>
              chart.name === "Children Involvement in Food Prep" ||
              chart.name === "Children Socializing while Eating"
          );
        case "standards":
          return allCharts.filter(
            (chart) =>
              chart.name === "National Program Evaluation" ||
              chart.name === "Feedback on School Food Programs"
          );
        default:
          return [];
      }
    })();

    return mainChart ? [mainChart, ...relatedCharts] : relatedCharts;
  };

  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToTopButton />
      <title>Parents&apos; Opinions on School Food Programs</title>

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
