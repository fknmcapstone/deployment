describe("Landing Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Smokes key elements", () => {
    const texts = [
      "header",
      "header_logo",
      "header_title",
      "nav_bar",
      "research_title",
      "landing_text",
      "school_food_programs_text",
      "research_text",
    ];
    for (var text of texts) {
      cy.get('[data-cy="' + text + '"]').should("be.visible");
    }
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
    cy.checkA11y();
  });
});
