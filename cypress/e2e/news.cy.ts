import data from "../../src/app/(dashboard)/news/articles.json";

describe("News Page Spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clickNavBarItem("news");
  });
  it("Smokes key elements", () => {
    const texts = ["main_title", "recent_news_title", "all_news_title"];
    for (var text of texts) {
      cy.get('[data-cy="' + text + '"]').should("be.visible");
    }

    // Test if for each article the image, title and date are visible
    cy.get('[data-cy="recent_article"]').each((link) => {
      cy.wrap(link).find('[data-cy="recent_article_img"]').should("be.visible");
      cy.wrap(link)
        .find('[data-cy="recent_article_title"]')
        .should("be.visible");
      cy.wrap(link)
        .find('[data-cy="recent_article_date"]')
        .should("be.visible");
    });

    // TODO: When more articles are added, will have to click through the carousel to see the others
    cy.get('[data-cy="article"]').each((link) => {
      cy.wrap(link).find('[data-cy="article_img"]').should("be.visible");
      cy.wrap(link).find('[data-cy="article_title_text"]').should("be.visible");
      cy.wrap(link).find('[data-cy="article_date_text"]').should("be.visible");
    });

    // Tests all the images load properly
    cy.get("img").each((link) => {
      if (link.prop("src"))
        cy.request({
          url: link.prop("src"),

          failOnStatusCode: false,
        });
    });
  });

  it("Tests interactivity with both carousels", () => {
    // Recent News carousel

    // Disables autoplay by clicking a button in the carousel
    cy.get('[data-cy="next_svg_button"]').click();

    // Tests the previous and next buttons
    cy.get('[class*="paginationSelectedDot"]').each((button) => {
      cy.wrap(button)
        .invoke("attr", "data-cy")
        .then((button_name) => {
          cy.get('[data-cy="next_svg_button"]').click();
          cy.get('[class*="paginationSelectedDot"]')
            .invoke("attr", "data-cy")
            .should("not.eq", button_name);
          cy.get('[data-cy="prev_svg_button"]').click();
          cy.get('[class*="paginationSelectedDot"]')
            .invoke("attr", "data-cy")
            .should("eq", button_name);
        });
    });

    // Tests clicking the pagination dots
    cy.get('[class*="page_paginationDot"]')
      .not('[class*="paginationSelectedDot"]')
      .first()
      .each((button) => {
        cy.wrap(button).click();
        cy.wrap(button)
          .invoke("attr", "class")
          .should("contain", "paginationSelectedDot");
      });

    // All News carousel

    // Ensure that carousel starts on the first page and previous button is disabled
    cy.get('[data-cy="dot_number_button_0"]')
      .invoke("attr", "class")
      .should("contain", "pageSelectedNumber");
    cy.get('[data-cy="prev_text_button"]').should("be.disabled");

    // Check if Next button should be disabled or not
    if (data.all_articles.length <= 6) {
      cy.get('[data-cy="next_text_button"]').should("be.disabled");
    } else {
      // If it is enabled and multiple pages exist, test clicking the numbers as well
      cy.get('[data-cy="next_text_button"]').should("be.enabled").click();
      cy.get('[data-cy="dot_number_button_1"]')
        .invoke("attr", "class")
        .should("contain", "pageSelectedNumber");

      cy.get('[data-cy="prev_text_button"]').should("be.enabled").click();
      cy.get('[data-cy="dot_number_button_0"]')
        .invoke("attr", "class")
        .should("contain", "pageSelectedNumber");

      cy.get('[data-cy="dot_number_button_1"]').click();
      cy.get('[data-cy="dot_number_button_1"]')
        .invoke("attr", "class")
        .should("contain", "pageSelectedNumber");
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
