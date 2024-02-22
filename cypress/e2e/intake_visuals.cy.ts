import chartsData from "../../src/app/(dashboard)/(research)/intake_visuals/charts.json";

describe("Intake Visuals Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("intake_visuals");
  });

  it("Checks key element functionality", () => {
    // Check return to top button functionality
    cy.get('[data-cy="return_to_top_button"]').should("not.be.visible");
    cy.scrollTo("bottom");
    cy.get('[data-cy="return_to_top_button"]').should("be.visible").click();
    cy.window().its("scrollY").should("equal", 0);

    // Check category name texts exist
    for (var categoryData of chartsData) {
      cy.get(
        '[data-cy="shortcut_' + categoryData.category + '_header"]'
      ).should("be.visible");
      cy.get('[data-cy="chart_' + categoryData.category + '_header"]').should(
        "be.visible"
      );
    }
  });

  it("Tests chart functionality", () => {
    let allCharts = [];
    let allChartsNames = [];
    for (var category of chartsData) {
      for (var chart of category.charts) {
        allCharts.push(category.category + chart.name);
        allChartsNames.push(chart.name);
      }
    }
    const randNumSet = new Set<number>();
    while (randNumSet.size < 5) {
      randNumSet.add(Math.floor(Math.random() * allCharts.length));
    }
    var chartsToTest: string[] = [];
    for (const num of randNumSet) {
      chartsToTest.push(allCharts[num]);
    }
    for (var chartIndex in chartsToTest) {
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
    cy.checkA11y();
  });
});
