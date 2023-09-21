// cypress/integration/toast.spec.js

describe("Toast Feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/challenge-III"); // Assuming your app is hosted at the root URL
  });

  it("should add and remove a toast", () => {
    cy.get("form").as("toastForm");
    cy.get("@toastForm").within(() => {
      cy.get("#title").type("Test Toast Title");
      cy.get("#desc").type("Test Toast Description");
      cy.get("#position-selection").select("top-left");
      cy.get("button[type=submit]").click();
    });

    cy.get(".single-toast-container").should("have.length", 2); // One default toast and one added toast

    cy.get(".toast-close-button").first().click(); // Remove the default toast

    cy.get(".single-toast-container").should("have.length", 1); // Only one toast should remain
  });

  it("should change toast position", () => {
    cy.get("form").as("toastForm");
    cy.get("@toastForm").within(() => {
      cy.get("#title").type("Test Toast Title");
      cy.get("#desc").type("Test Toast Description");
      cy.get("#position-selection").select("bottom-right");
      cy.get("button[type=submit]").click();
    });

    cy.get(".single-toast-container").should("have.length", 2); // One default toast and one added toast

    cy.get(".single-toast-container")
      .last()
      .should("have.css", "bottom", "16px") // Check if toast is at the bottom
      .should("have.css", "right", "16px"); // Check if toast is on the right
  });

  it("should display toast content correctly", () => {
    cy.get("form").as("toastForm");
    cy.get("@toastForm").within(() => {
      cy.get("#title").type("Test Toast Title");
      cy.get("#desc").type("Test Toast Description");
      cy.get("#position-selection").select("bottom-right");
      cy.get("button[type=submit]").click();
    });

    cy.get(".toast-title").should("contain", "Test Toast Title"); // Check if title is displayed
    cy.get(".toast-description").should("contain", "Test Toast Description"); // Check if description is displayed
  });
});
