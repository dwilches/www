/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.dwilches.com/')
    })

    it('Homepage contains all elements', () => {
        cy.contains('Daniel Wilches')
        cy.get('.profile-picture')

        cy.get("a.nav-link.active")
            .contains("Home")
        cy.get("a.nav-link")
            .contains("About")
        cy.get("a.nav-link")
            .contains("Contact")
        cy.get(".fa-linkedin-square")
            .parent()
            .should("have.attr", "href")
            .and("match", /linkedin.com/)
    })

    it('Can go to About', () => {
        cy.get("a.nav-link")
            .contains("About")
            .click()

        cy.contains("C++")
        cy.contains("Java")
    })

    it('Can go to Contact', () => {
        cy.get("a.nav-link")
            .contains("Contact")
            .click()

        cy.contains("me@dwilches.com")
    })
})
