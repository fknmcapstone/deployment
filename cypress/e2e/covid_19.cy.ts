describe("COVID-19 Page spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/covid_19_impacts*").as("load");
    cy.get('[data-cy="covid_link"]').click();
    cy.wait("@load");
  });
  it("Smokes key texts", () => {
    const texts = [
      "header1",
      "infotext_school1",
      "infotext_school2",
      "header2",
      "infotext_canadian1",
      "infotext_canadian2",
      "header3",
      "infotext_covid1",
      "infotext_covid2",
      "header4",
      "infotext_adapt1",
      "infotext_adapt2",
      "infotext_adapt3",
      "infotext_adapt4",
      "infotext_adapt5",
      "header5",
      "infotext_chall1",
      "infotext_chall2",
      "infotext_chall3",
      "infotext_chall4",
      "infotext_chall5",
      "infotext_chall6",
    ];
    for (var text of texts) {
      cy.get('[data-cy="' + text + '"]').should("be.visible");
    }
  });

  it("Tests the page for accessibility", () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
