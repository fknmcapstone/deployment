/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import styles from "./page.module.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export function shortcutMenuList(categoryCharts: {
  category: string;
  subtitle: string;
  charts: {
    name: string;
    url: string;
    blurb: string;
  }[];
}) {
  return (
    <nav className={styles.shortcutMenuNav}>
      <p className={styles.shortcutCategoryHeader}>
        {categoryCharts.category} Chart Menu
      </p>
      <div className={styles.shortcutMenuSeparator} />
      {categoryCharts.charts.map((chart) => (
        <Link
          className={styles.chartLink}
          key={chart.name.replace(/ /g, "_").replace(/[^a-zA-Z ]/g, "")}
          href={`#${categoryCharts.category.replace(/ /g, "_")}${chart.name
            .replace(/ /g, "_")
            .replace(/[^a-zA-Z ]/g, "")}`}
        >
          {chart.name}
        </Link>
      ))}
    </nav>
  );
}

function ChartCard({
  chart,
  category,
}: {
  chart: { name: string; url: string; blurb: string };
  category: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isTooltipPinned, setIsTooltipPinned] = useState(false);
  
  // Effect to add a click event listener to the document to close pinned tooltips
  // when clicking outside the tooltip container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isTooltipPinned) {
        const tooltipContainer = document.querySelector(`.${styles.tooltipContainer}`);
        if (tooltipContainer && !tooltipContainer.contains(event.target as Node)) {
          setIsTooltipPinned(false);
          setIsTooltipVisible(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTooltipPinned]);

  return (
    <div
      ref={ref}
      id={`${category.replace(/ /g, "_")}${chart.name
        .replace(/ /g, "_")
        .replace(/[^a-zA-Z ]/g, "")}`}
      className={`${styles.chartArea} ${inView ? styles.chartVisible : ""}`}
    >
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>{chart.name}</h3>
        <div 
          className={styles.tooltipContainer}
          onMouseEnter={() => !isTooltipPinned && setIsTooltipVisible(true)}
          onMouseLeave={() => !isTooltipPinned && setIsTooltipVisible(false)}
        >
          <button
            className={`${styles.tooltipButton} ${isTooltipPinned ? styles.tooltipButtonActive : ''}`}
            aria-label="Chart information"
            onClick={(e) => {
              e.stopPropagation();
              if (isTooltipPinned) {
                setIsTooltipPinned(false);
                setIsTooltipVisible(false);
              } else {
                setIsTooltipPinned(true);
                setIsTooltipVisible(true);
              }
            }}
          >
            <span>i</span>
          </button>
          {(isTooltipVisible || isTooltipPinned) && (
            <div className={`${styles.tooltipPopup} ${isTooltipPinned ? styles.tooltipPinned : ''}`}>
              <p>{chart.blurb}</p>
            </div>
          )}
        </div>
      </div>

      {inView && (
        <div className={styles.chartContainer}>
          <iframe
            title={`${category} - ${chart.name}`}
            width="100%"
            height="100%"
            src={chart.url}
            className={styles.chartFrame}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export function chartList(
  category: string,
  jsonCharts: {
    name: string;
    url: string;
    blurb: string;
  }[]
) {
  return (
    <div className={styles.chartsGrid}>
      {jsonCharts.map((chart) => (
        <ChartCard key={chart.name} chart={chart} category={category} />
      ))}
    </div>
  );
}
