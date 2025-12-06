/// <reference types="cypress" />

const elementsProduct = {
    addProducts: {
        ProductBackpack: '#add-to-cart-sauce-labs-backpack',
        ProductBike: '#add-to-cart-sauce-labs-bike-light'
    }
}


Cypress.Commands.add('addProductBackpack', () => {
    cy.get(elementsProduct.addProducts.ProductBackpack)
        .click()
}) 

Cypress.Commands.add('addProductBike', () => { 
    cy.get(elementsProduct.addProducts.ProductBike)
        .click()
})