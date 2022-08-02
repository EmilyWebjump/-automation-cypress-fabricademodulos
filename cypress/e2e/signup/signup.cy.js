/// <reference types="Cypress" />
import data from '../../support/factory/user'
describe('Cadastro', () => {
  it('cadastro com sucesso cliente', function() {
    cy.fillSignupFormAndSubmit(data)
    cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
      sentTo: data.email
    }).then(email => {
      cy.visit(email.html.links[1].href)
      cy.contains('Obrigado por registrar-se com Mercado até você Store.').should('be.visible')
    })
  })
})
