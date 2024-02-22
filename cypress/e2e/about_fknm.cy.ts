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
      "admin_support",
      "website_team",
    ];

    // Assert none are already open
    for (const item of accordionItems) {
      cy.get(`[data-cy="${item}"]`).invoke("attr", "data-open").should("not.exist");
      cy.get(`[data-cy="${item}"] section`).should("not.exist");
    }

    // Click several accordion items
    for (const item of accordionItems.slice(1, 3)) {
      cy.get(`[data-cy="${item}"]`).click();
    }

    for (const item of accordionItems.slice(1, 3)) {
      cy.get(`[data-cy="${item}"]`).invoke("attr", "data-open").should("contain", "true");
      cy.get(`[data-cy="${item}"] section`).should("be.visible");
    }

    // First item should not be open
    cy.get(`[data-cy="${accordionItems[0]}"]`).invoke("attr", "data-open").should("not.exist");
    cy.get(`[data-cy="${accordionItems[0]}"] section`).should("not.exist");

    // Test that popover appears, and can see more than one
    cy.get(`[data-cy="${accordionItems[1]}"] [data-cy="popover_trigger_0"]`).click();
    cy.get('[data-cy="popover_content_0"]').should("be.visible");

    cy.get(`[data-cy="${accordionItems[1]}"] [data-cy="popover_trigger_2"]`).click();
    cy.get('[data-cy="popover_content_0"]').should("be.visible");
    cy.get('[data-cy="popover_content_2"]').should("be.visible");

    // Test closing the popover content
    cy.get(`[data-cy="${accordionItems[1]}"] [data-cy="popover_trigger_0"]`).click();
    cy.get('[data-cy="popover_content_0"]').should("not.exist");
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
