/// <reference types="cypress" />

Cypress.Commands.add('addProductBackpack', () => {
    cy.get('#add-to-cart-sauce-labs-backpack')
        .click()
}) 

Cypress.Commands.add('addProductBike', () => { 
    cy.get('#add-to-cart-sauce-labs-bike-light')
        .click()
})