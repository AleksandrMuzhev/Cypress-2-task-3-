import users from "../fixtures/users";

describe("user store api", () => {
  it("should create user", () => {
    cy.createUser(users.userNew).then(() => {
      cy.getUser("userNew");
    });
  });

  it("should update user", () => {
    cy.updateUser(users.userNew.username, users.userUpdate).then(() => {
      cy.getUser("userUpdate");
    });
  });

  it("should delete user", () => {
    cy.deleteUser(users.userNew.username);
  });
});
