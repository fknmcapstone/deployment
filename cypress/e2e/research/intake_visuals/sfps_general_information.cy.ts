import chartsData from "../../../../src/app/(dashboard)/(research)/intake_visuals/charts.json";

describe("SFPs General Information Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("sfps_general_information");
  });

  it("Checks key element functionality", () => {
    // Check return to top button functionality
    cy.get('[data-cy="return_to_top_button"]').should("not.be.visible");
    cy.scrollTo("bottom");
    cy.get('[data-cy="return_to_top_button"]').should("be.visible").click();
    cy.window().its("scrollY").should("equal", 0);

    cy.get('[data-cy="category_title"]').should("be.visible");
    cy.get('[data-cy="category_subtext"]').should("be.visible");
  });

  it("Tests chart functionality", () => {
    const pageTitle = "SFPs General Information";
    const allCharts: string[] = [];
    const allChartsNames: string[] = [];
    for (const chart of chartsData[pageTitle].charts) {
      allCharts.push(
        chartsData[pageTitle].category.replace(/ /g, "_") +
          chart.name.replace(/ /g, "_").replace(/[^a-zA-Z ]/g, "")
      );
      allChartsNames.push(chart.name);
    }

    const chartsToTest: string[] = [];
    if (allCharts.length < 5) {
      for (const i of allCharts) {
        chartsToTest.push(i);
      }
    } else {
      const randNumSet = new Set<number>();
      while (randNumSet.size < 5) {
        randNumSet.add(Math.floor(Math.random() * allCharts.length));
      }
      for (const num of randNumSet) {
        chartsToTest.push(allCharts[num]);
      }
    }

    for (const chartIndex in chartsToTest) {
      cy.get('[data-cy="shortcut_menu"]')
        .contains("a", allChartsNames[chartIndex])
        .click();
      cy.get('[data-cy="' + chartsToTest[chartIndex] + '"]').should(
        "be.visible"
      );
      cy.get(
        '[data-cy="' + chartsToTest[chartIndex] + '"] [data-cy="tooltip_text"]'
      ).should("not.be.visible");

      cy.get(
        '[data-cy="' + chartsToTest[chartIndex] + '"] [data-cy="tooltip_text"]'
      )
        .invoke("show")
        .should("be.visible")
        .invoke("text")
        .should("not.eq", "");
    }

    // Test PowerBI link works for every single chart
    cy.get('[data-cy="chart_frame"]').each((chart) => {
      if (chart.prop("src"))
        cy.request({
          url: chart.prop("src"),

          failOnStatusCode: false,
        });
    });
  });

  it("Tests the page for accessibility", () => {
    cy.injectAxe();
    cy.checkA11y(undefined, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"],
      },
    });
  });
});
