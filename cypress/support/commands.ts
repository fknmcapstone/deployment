/// <reference types="cypress" />
export {};

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      clickNavBarItem(name: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("clickNavBarItem", (name) => {
  /* Cypress has a known issue where it cannot detect the CSS pseudo-class hover.
   * Because Cypress cannot simulate a CSS hover, we must force-click instead for the hovering sub menus.
   * Otherwise this would be the code:
   * cy.get("#nav_publications").invoke("show");
   * cy.get("#nav_publications_submenu").should("be.visible");
   */
  cy.intercept("GET", "/" + name + "*").as("load");
  cy.get('[data-cy="nav_' + name + '"]').click({ force: true });
  cy.wait("@load");
  cy.wait(1000);
});
