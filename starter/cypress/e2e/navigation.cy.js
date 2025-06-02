/* global describe, it, cy, beforeEach */

describe("Navigation Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("clicking 'Card Sets' navigates to the card sets page", () => {
        cy.get("#cardSetPage").click();
        cy.contains("Card Sets").should("exist");
    });

    it("clicking 'About' navigates to the about page", () => {
        cy.get("#aboutPage").click();
        cy.contains("About").should("exist");
    });

    it("clicking 'Home' navigates to the home page", () => {
        cy.get("#homePage").click();
        cy.contains("Home").should("exist");
    });
});