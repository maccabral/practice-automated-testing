describe("Search Product", () => {
  it("Search Product", () => {
    cy.visit("https://automationexercise.com/login");

    cy.wait(1000);
    cy.get('[data-qa="login-email"]').type("sheklana@gmail.com", {
      delay: 100,
    });
    cy.get('[data-qa="login-password"]').type("1234", { delay: 100 });
    cy.get('[data-qa="login-button"]').click();

    cy.wait(1000);
    cy.get('a[href="/products"]').click();

    const products = ["Tshirt", "Dress", "Jeans"];

    products.forEach((product) => {
      cy.get("#search_product")
        .invoke("val")
        .then((text: any) => {
          const length = text?.length || 0;

          if (length > 0) {
            const backspaces = "{backspace}".repeat(length);

            cy.get("#search_product").type(backspaces, { delay: 100 });
          }

          cy.get("#search_product").type(product, { delay: 100 });

          cy.get("#submit_search").click();
        });
    });

  });
});
