/// <reference types="cypress" />

Cypress.Commands.add('validateProduct', (productName, price) => {
    cy.contains('.cart_item', productName)
      .within(() => {
        cy.get('.inventory_item_name').should('have.text', productName);
        cy.get('.inventory_item_price').should('have.text', price);
      });
})

Cypress.Commands.add('validateTotals', (itemTotal, tax, total) => {
    cy.contains(`Item total: ${itemTotal}`).should('be.visible');
    cy.contains(`Tax: ${tax}`).should('be.visible');
    cy.contains(`Total: ${total}`).should('be.visible');
})


