/// <reference types="Cypress" />
describe('Login', () => {
  it('login com sucesso customer', () => {
    cy.visit('/customer/account/login')
    cy.login()
    cy.contains('Informações da Conta').should('be.visible')
  })

  it('login com sucesso seller', () => {
    cy.login(Cypress.env('SELLER_EMAIL'), Cypress.env('SELLER_PASSWORD'))
    cy.contains('Painel de Controle').should('be.visible')
  })

  it('login checkout', () => {
    cy.loginCheckout()
    cy.intercept('GET', '**/static/version1658353125**').as('checkout')
    cy.wait('@checkout')
    cy.get('#shipping > .step-title').should('have.text', 'Endereço de Entrega')
  })

  it('Reset senha', () => {
    cy.visit('/customer/account/forgotpassword/')
    cy.get('#email_address').type(Cypress.env('USER_EMAIL'))
    cy.get('#form-validate button[type="submit"]').click()
    cy.get('.message-success > div').should('have.text', 'Acesse seu endereço de e-mail para redefinir a senha.')
  })
})
