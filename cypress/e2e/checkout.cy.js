/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page_checkout_commands from '../support/home_page_checkout_commands'
import register_page_checkout_commands from '../support/register_page_checkout_commands'
import product_page_commands from '../support/product_page_commands'

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()


describe('Checkout', () => {

    beforeEach('Acessando tela de login', () => {
        cy.acessHomePage()
        cy.loginSucess()
        //Site não retorna mensagem de logado com sucesso
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
        //Automação de valor da compra ainda será feito
        cy.btnFinish()
        cy.messageSucess()
        cy.btnBackHome()
        //Site não retorna mensagem de retorno com sucesso
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

    it('Validar fluxo com campo postalCode vazio', () => {
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



