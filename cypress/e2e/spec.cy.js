Cypress.config("defaultCommandTimeout", 10000);

describe("Verify Size Cells", () => {
  it("visits git home page", () => {
    cy.visit("https://github.com/amplemarket/github-repo-size-public");
    // cy.wait(1000000);
    cy.get("folders-and-files").should("Folders and files");
  }),
    it("verifies size is available", () => {});
});
