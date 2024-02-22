describe("Presentations Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("presentations");
  });
  it("Smokes key elements", () => {
    cy.get('[data-cy="presentations_title"]').should("be.visible");
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
