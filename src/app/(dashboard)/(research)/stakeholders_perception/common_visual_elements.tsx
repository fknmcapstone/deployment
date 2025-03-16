/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { JSX, useState, useEffect } from "react";
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
    // Create a component for each chart with its own state
    const ChartWithTooltip = () => {
      const [isTooltipPinned, setIsTooltipPinned] = useState(false);
      
      // Effect to add a click event listener to the document to close pinned tooltips
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (isTooltipPinned) {
            const tooltipContainer = document.querySelector(`.${styles.tooltipContainer}`);
            if (tooltipContainer && !tooltipContainer.contains(event.target as Node)) {
              setIsTooltipPinned(false);
              const tooltip = tooltipContainer.querySelector(`.${styles.tooltipPopup}`);
              if (tooltip) {
                tooltip.classList.remove(styles.visible);
              }
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
          id={`${category.replace(/ /g, "_")}${chart.name
            .replace(/ /g, "_")
            .replace(/[^a-zA-Z ]/g, "")}`}
          data-cy={`${category.replace(/ /g, "_")}${chart.name
            .replace(/ /g, "_")
            .replace(/[^a-zA-Z ]/g, "")}`}
          className={styles.chartArea}
        >
          <div 
            className={styles.tooltipContainer}
            onMouseEnter={(e) => {
              if (!isTooltipPinned) {
                const tooltip = e.currentTarget.querySelector(`.${styles.tooltipPopup}`);
                if (tooltip) {
                  tooltip.classList.add(styles.visible);
                }
              }
            }}
            onMouseLeave={(e) => {
              if (!isTooltipPinned) {
                const tooltip = e.currentTarget.querySelector(`.${styles.tooltipPopup}`);
                if (tooltip) {
                  tooltip.classList.remove(styles.visible);
                }
              }
            }}
          >
            <button 
              data-cy="tooltip_button" 
              className={`${styles.tooltipButton} ${isTooltipPinned ? styles.tooltipButtonActive : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                const tooltip = e.currentTarget.parentElement?.querySelector(`.${styles.tooltipPopup}`);
                if (tooltip) {
                  if (isTooltipPinned) {
                    setIsTooltipPinned(false);
                    tooltip.classList.remove(styles.visible);
                  } else {
                    setIsTooltipPinned(true);
                    tooltip.classList.add(styles.visible);
                  }
                }
              }}
            >
              i
            </button>
            <div data-cy="tooltip_text" className={`${styles.tooltipPopup} ${isTooltipPinned ? styles.tooltipPinned : ''}`}>
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
    };
    
    charts.push(<ChartWithTooltip key={chart.name} />);
  });

  return charts;
}
