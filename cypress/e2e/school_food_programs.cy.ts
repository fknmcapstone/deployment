/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
describe("School Food Programs Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("school_food_programs");
  });

  it("Checks key elements", () => {
    cy.get('[data-cy="about_text"]').should("be.visible");
    cy.get('[data-cy="helper_text"]').should("be.visible");
    cy.get('[data-cy="legend"]').should("be.visible");
    const legendItems = ["key_outcomes", "indicator", "assessment"];
  });

  it("Tests PowerBI Integration", () => {
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
