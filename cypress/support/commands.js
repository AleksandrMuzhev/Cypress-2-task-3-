// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import users from "../fixtures/users";
Cypress.Commands.add("createUser", (userData) => {
  cy.request("POST", "/user", userData).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: "100",
    });
  });
});

Cypress.Commands.add("updateUser", (username, userData) => {
  cy.request("PUT", `/user/${username}`, userData).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: "300",
    });
  });
});

Cypress.Commands.add("deleteUser", (username) => {
  cy.request("DELETE", `/user/${username}`).then((response) => {
    expect(response.status).to.eq(200);
  });
  cy.request({
    url: `/user/${username}`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
  });
});

Cypress.Commands.add("getUser", (userType) => {
  const user = users[userType];
  cy.request(`/user/${user.username}`).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls(user);
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
