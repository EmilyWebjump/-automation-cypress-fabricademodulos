/* eslint-disable no-useless-escape */
/// <reference types="Cypress" />

import typeUser from '../../support/enum/typeUser'
import user from '../../support/factory/user'

describe('register', () => {
  it.only('deve cadastrar um usuário cliente com sucesso', () => {
    cy.visit('/customer/account/create/')
    cy.setCookie('hyper_local', '{"address":"Rua Alexandre Dumas, 1711 - 6o Andar - Santo Amaro, S\u00e3o Paulo - SP, 04717-004, Brasil","lat":"-23.63025","lng":"-46.7080043","city":"","state":"S\u00e3o Paulo","country_code":"BR","state_code":"SP","country":"Brasil","postcode":"04717-004","redirect_url":"cms\/index\/index","address-id":"0"}')
    cy.reload()
    cy.fillSignupFormAndSubmit(user, typeUser.CUSTOMER)
  })

  it('deve cadastrar um usuário vendedor com sucesso', () => {
    cy.visit('/')
    cy.fillSignupFormAndSubmit(user, typeUser.SELLER)
  })
})