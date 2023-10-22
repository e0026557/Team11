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

  it("Should not login with incorrect credentials", () => {
    cy.intercept(
      "POST",
      "https://pjwui6c4nj.execute-api.ap-southeast-1.amazonaws.com/dev/userapi/user/Login"
    ).as("login");

    cy.visit(BASE_URL + "/login")
      .then(() => {
        cy.get("input[name='email']").type("someotheremail@email.com");
        cy.get("input[name='password']").type("test");
      })
      .as("Login");

    cy.get('button[type="submit"]').click();
    cy.wait("@login").then((interception) => {
      console.log("interception: ", interception);
      assert(interception?.response?.statusCode !== 200);
    });
  });

  it("Should login with correct credentials", () => {
    cy.intercept(
      "POST",
      "https://pjwui6c4nj.execute-api.ap-southeast-1.amazonaws.com/dev/userapi/user/Login"
    ).as("login");

    cy.visit(BASE_URL + "/login")
      .then(() => {
        cy.get("input[name='email']").type("test111@email.com");
        cy.get("input[name='password']").type("test");
      })
      .as("Login");

    cy.get('button[type="submit"]').click();
    cy.wait("@login").then((interception) => {
      console.log("interception: ", interception);
      assert(interception?.response?.statusCode === 200);
    });
  });
});
