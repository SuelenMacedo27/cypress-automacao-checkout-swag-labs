/// <reference types="cypress" />

const elementsRegister = {
    cart: {
        cart: '.shopping_cart_link'
    },
    fields: {
        firstName: '#first-name',
        lastName: '#last-name',
        postalCode: '#postal-code'
    },
    buttons: {
        btnContinue: '#continue',
        btnFinish: '#finish',
        btnBackHome: '#back-to-products',
        btnCheckout: '#checkout'
    },
    message: {
        SucessHeader: '.complete-header',
        SucessText: '.complete-text'
    },
    messageError: {
        messageError: '#checkout_info_container h3'
    }
}

Cypress.Commands.add('shoppingCart', () => {
    cy.get(elementsRegister.cart.cart)
        .should('be.visible')
        .click()
})

Cypress.Commands.add('btnCheckout', () => {
    cy.get(elementsRegister.buttons.btnCheckout)
        .click()
})

Cypress.Commands.add('firstName', (primeiroNome) => {
    cy.get(elementsRegister.fields.firstName)
        .type(primeiroNome)
})

Cypress.Commands.add('lastName', (segundoNome) => {
    cy.get(elementsRegister.fields.lastName)
        .type(segundoNome)
})

Cypress.Commands.add('postalCode', (codigoPostal) => {
    cy.get(elementsRegister.fields.postalCode)
        .type(codigoPostal)
})

Cypress.Commands.add('btnContinue', () => {
    cy.get(elementsRegister.buttons.btnContinue)
        .click()
})

Cypress.Commands.add('btnFinish', () => {
    cy.get(elementsRegister.buttons.btnFinish)
        .click()
})

Cypress.Commands.add('messageSucess', () => {
    cy.get(elementsRegister.message.SucessHeader)
        .should('have.text', 'Thank you for your order!')

    cy.get(elementsRegister.message.SucessText)
        .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})

Cypress.Commands.add('btnBackHome', () => {
    cy.get(elementsRegister.buttons.btnBackHome)
        .click()
})

Cypress.Commands.add('messageError', (message) => {
    cy.get(elementsRegister.messageError.messageError)
        .should('have.text', message)
})