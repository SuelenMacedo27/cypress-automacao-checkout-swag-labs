/// <reference types="cypress" />

Cypress.Commands.add('shoppingCart', () => {
    cy.get('.shopping_cart_link')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('btnCheckout', () => {
    cy.get('#checkout')
        .click()
})

Cypress.Commands.add('firstName', (primeiroNome) => {
    cy.get('#first-name')
        .type(primeiroNome)
})

Cypress.Commands.add('lastName', (segundoNome) => {
    cy.get('#last-name')
        .type(segundoNome)
})

Cypress.Commands.add('postalCode', (codigoPostal) => {
    cy.get('#postal-code')
        .type(codigoPostal)
})

Cypress.Commands.add('btnContinue', () => {
    cy.get('#continue')
        .click()
})

Cypress.Commands.add('btnFinish', () => {
    cy.get('#finish')
        .click()
})

Cypress.Commands.add('messageSucess', () => {
    cy.get('.complete-header')
        .should('have.text', 'Thank you for your order!')

    cy.get('.complete-text')
        .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})

Cypress.Commands.add('btnBackHome', () => {
    cy.get('#back-to-products')
        .click()
})

Cypress.Commands.add('messageError', (message) => {
    cy.get('#checkout_info_container h3')
        .should('have.text', message)

})