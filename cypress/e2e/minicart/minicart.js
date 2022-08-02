/// <reference types="Cypress" />
describe('minicart', () => {
  // TODO regras de menor price do hyper local
  it('deve adicionar produto no carrinho', () => {
    cy.goToMiniCart()
    cy.get('.product-item-name > a').should('have.text', 'macarrotes')
    cy.get('.minicart-price > .price').should('have.text', 'R$5,00')
  })
})