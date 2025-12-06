// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const elementsHome = {
    logo: {
        logo: '.login_logo'
    },
    fields: {
        name: '#user-name',
        password: '#password',
    },
    buttons:{
        login: '#login-button'
    }
}

Cypress.Commands.add('acessHomePage', () => {
    cy.visit('/')
        .get(elementsHome.logo.logo)
})

Cypress.Commands.add('loginSucess', () => {
    cy.get(elementsHome.fields.name)
        .should('be.visible')
        .type('standard_user')

    cy.get(elementsHome.fields.password)
        .should('be.visible')
        .type('secret_sauce')

    cy.get(elementsHome.buttons.login)
        .click()
})