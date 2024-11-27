/* eslint-disable quotes */
describe("AboutFKNM Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("about_fknm");
  });

  it("Smokes key elements", () => {
    const texts = [
      "what_is_header",
      "what_is_text",
      "about_the_header",
      "about_the_text",
      "meet_header",
    ];
    for (const text of texts) {
      cy.get(`[data-cy="${text}"]`).should("be.visible");
    }
  });

  it("Tests interactivity with accordion and popover content", () => {
    const accordionItems = [
      "steering_committee",
      "research_team",
      "administrative_support",
      "website_team",
    ];

    // Assert none are already open
    for (const item of accordionItems) {
      cy.get(`[data-cy="${item}"]`)
        .invoke("attr", "data-open")
        .should("not.exist");
      cy.get(`[data-cy="${item}"] section`).should("not.exist");
    }

    // Click several accordion items
    for (const item of accordionItems.slice(1, 3)) {
      cy.get(`[data-cy="${item}"]`).click();
    }

    for (const item of accordionItems.slice(1, 3)) {
      cy.get(`[data-cy="${item}"]`)
        .invoke("attr", "data-open")
        .should("contain", "true");
      cy.get(`[data-cy="${item}"] section`).should("be.visible");
    }

    // First item should not be open
    cy.get(`[data-cy="${accordionItems[0]}"]`)
      .invoke("attr", "data-open")
      .should("not.exist");
    cy.get(`[data-cy="${accordionItems[0]}"] section`).should("not.exist");

    // Test that modal appears
    cy.get(`[data-cy="${accordionItems[1]}"] [data-cy="profile_card"]`)
      .first()
      .click();
    cy.get('[data-cy="profile_modal"]').should("be.visible");

    cy.get('[data-cy="profile_modal"] button[aria-label="Close"]').click();
    cy.get('[data-cy="profile_modal"]').should("not.exist");
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
