describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/about_fknm/contact");
  });

  it("displays contact form and information", () => {
    cy.get("h1").should("contain", "Contact Us");

    // Check form elements
    cy.get("#firstName").should("exist");
    cy.get("#lastName").should("exist");
    cy.get("#email").should("exist");
    cy.get("#phone").should("exist");
    cy.get("#message").should("exist");
    cy.get("button[type='submit']").should("exist");

    // Check contact information
    cy.contains("Joannah & Brian Lawson Centre for Child Nutrition").should(
      "exist"
    );
    cy.contains("childnutrition.research@utoronto.ca").should("exist");
  });

  it("validates form inputs", () => {
    cy.get("button[type='submit']").click();

    // Check HTML5 validation
    cy.get("#firstName:invalid").should("exist");
    cy.get("#lastName:invalid").should("exist");
    cy.get("#email:invalid").should("exist");
    cy.get("#message:invalid").should("exist");
  });
});
