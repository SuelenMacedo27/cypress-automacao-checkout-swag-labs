/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page_checkout_commands from '../support/home_page_checkout_commands'
import register_page_checkout_commands from '../support/register_page_checkout_commands'
import product_page_commands from '../support/product_page_commands'
import overview_page_checkout_commands from '../support/overview_page_checkout_commands'

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()


describe('Checkout', () => {

    beforeEach('Acessando tela de login', () => {
        cy.acessHomePage()
        cy.loginSucess()
    })

    it('Validar fluxo de compra com sucesso', () => {
        cy.addProductBackpack()
        cy.addProductBike()
        cy.shoppingCart()
        cy.btnCheckout()
        cy.firstName(firstName)
        cy.lastName(lastName)
        cy.postalCode('00000')
        cy.btnContinue()
        cy.validateProduct('Sauce Labs Backpack', '$29.99')
        cy.validateProduct('Sauce Labs Bike Light', '$9.99')
        cy.validateTotals('$39.98', '$3.20', '$43.18')
        cy.btnFinish()
        cy.messageSucess()
        cy.btnBackHome()
        cy.checkBtnCart()
    })

    it('Validar fluxo com campos firstName, lastName e postalCode vazios', () => {
        cy.addProductBackpack()
        cy.addProductBike()
        cy.shoppingCart()
        cy.btnCheckout()
        cy.btnContinue()
        cy.messageError('Error: First Name is required')
    })

    it('Validar fluxo com campo firstName vazio', () => {
        cy.addProductBackpack()
        cy.addProductBike()
        cy.shoppingCart()
        cy.btnCheckout()
        cy.lastName(lastName)
        cy.postalCode('00000')
        cy.btnContinue()
        cy.messageError('Error: First Name is required')
    })

    it('Validar fluxo com campo lastName vazio', () => {
        cy.addProductBackpack()
        cy.addProductBike()
        cy.shoppingCart()
        cy.btnCheckout()
        cy.firstName(firstName)
        cy.postalCode('00000')
        cy.btnContinue()
        cy.messageError('Error: Last Name is required')
    })

    it.only('Validar fluxo com campo postalCode vazio', () => {
        cy.addProductBackpack()
        cy.addProductBike()
        cy.shoppingCart()
        cy.btnCheckout()
        cy.firstName(firstName)
        cy.lastName(lastName)
        cy.btnContinue()
        cy.messageError('Error: Postal Code is required')
    })     
})



