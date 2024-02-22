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
    for (var item of legendItems) {
      cy.get('[data-cy="' + item + '_item"]').should("not.exist");
      cy.get('[data-cy="' + item + '"]').click();
      cy.get('[data-cy="' + item + '"]')
        .invoke("attr", "data-open")
        .should("contain", true);
      cy.get('[data-cy="' + item + '_item"]').should("be.visible");
    }
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
    cy.checkA11y();
  });
});
