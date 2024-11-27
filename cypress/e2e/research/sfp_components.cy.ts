/* eslint-disable quotes */
describe("SFP Components Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("sfp_components");
  });

  it("Checks key element functionality", () => {
    // Check return to top button functionality
    cy.get('[data-cy="return_to_top_button"]').should("not.be.visible");
    cy.scrollTo("bottom");
    cy.get('[data-cy="return_to_top_button"]').should("be.visible").click();
    cy.window().its("scrollY").should("equal", 0);

    const texts = [
      "card_title1",
      "card_title2",
      "card_title3",
      "card_title4",
      "card_title5",
      "card_title6",
    ];
    for (const text of texts) {
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
    cy.checkA11y(undefined, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"],
      },
    });
  });
});
