describe("Home Component with UI popup", () => {
  beforeEach("sample", () => {
    cy.visit("http://localhost:3000");
  });
  
  it("should display a custom popup when button is clicked", () => {

    cy.wait(5000);
    cy.contains("button", "Greet Me").click();

    cy.wait(1000);
    cy.contains("Hello, John!").should("be.visible");
  });
});
