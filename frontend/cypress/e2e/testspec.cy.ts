const BASE_URL = "https://d18jcr447812lg.cloudfront.net";

describe("Login Specs", () => {
  it("Visit React app", () => {
    cy.visit(BASE_URL);
  });

  it("URL should be redirected to Login", () => {
    cy.visit(BASE_URL).then(() => {
      cy.url().should("eq", BASE_URL + "/login");
    });
  });

  it("Should login with credentials", () => {
    cy.visit(BASE_URL + "/login")
      .then(() => {
        cy.get("input[name='email']").type("test@email.com");
        cy.get("input[name='password']").type("test");
      })
      .as("Login");

    cy.get('button[type="submit"]').click();
  });
});
