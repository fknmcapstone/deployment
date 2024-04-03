describe("Measurement Tool Assessment Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("measurement_tool_assessment");
  });

  it("Checks key elements", () => {
    cy.get('[data-cy="title"]').should("be.visible");
    cy.get('[data-cy="blurb1"]').should("be.visible");
    cy.get('[data-cy="blurb2"]').should("be.visible");
  });

  it("Tests PowerBI functionality", () => {
    // Test PowerBI link works for every single chart
    cy.get('[data-cy="chart_frame"]').each((chart) => {
      if (chart.prop("src"))
        cy.request({
          url: chart.prop("src"),

          failOnStatusCode: false,
        });
    });
  });

  it("Tests all links", () => {
    cy.get("a").each((link) => {
      if (link.prop("href"))
        cy.request({
          url: link.prop("href"),

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
