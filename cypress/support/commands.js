import typeUser from "./enum/typeUser"

Cypress.Commands.add('login',  (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD'),
) => {
    cy.get('input[name*="username"]').first().type(username)
    cy.get('input#pass').first().type(password, { log: false })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add("getBySelLike", (selector) => {
  return cy.get(`[name=${selector}]`)
})

Cypress.Commands.add('setLocationPopupHyperlocal', (local) => {
  cy.setCookie('hyper_local', '{"address":"Rua Alexandre Dumas, 1711 - 6o Andar - Santo Amaro, S\u00e3o Paulo - SP, 04717-004, Brasil","lat":"-23.63025","lng":"-46.7080043","city":"","state":"S\u00e3o Paulo","country_code":"BR","state_code":"SP","country":"Brasil","postcode":"04717-004","redirect_url":"cms\/index\/index","address-id":"0"}')
  cy.reload()
})

Cypress.Commands.add('fillSignupFormAndSubmit', (user, type) => {
  cy.get('#firstname').type(user.nome)
  cy.get('#lastname').type(user.sobreNome)
  cy.get('#dob').type(user.dataNasc)
  cy.get('.ui-datepicker-trigger').click()
  cy.get('#phone_number').type(user.phone)
  cy.get('#taxvat').type(user.cpf)

  if (type == typeUser.SELLER) {
    cy.get('#taxvat').type(user.cnpj)
    cy.get('#social_name').type(user.razaoSocial)
    cy.get('#business_name').type(user.nomeFantasia)
    cy.get('.acquit-field').check()
    cy.get('#profileurl').type(user.nomeLoja)
  }
  cy.get('#email_address').type(user.email)
  cy.get('#password').type(user.pass, { log: false })
  cy.get('#password-confirmation').type(user.pass, { log: false })
  cy.get('#assistance_allowed_checkbox').check()
})


Cypress.Commands.add('goToMiniCart', () => {
  cy.intercept('GET', '**/customer/section/load/?sections=cart**').as('addcart')
  cy.visit('https://mercadoatevc.qa-h47ppbq-7yochn4d6v67o.us-4.platformsh.site/macarrotes-3.html')
  cy.get('#product-addtocart-button').click()
  cy.wait('@addcart')
  cy.get('.showcart > .counter').click()
})

Cypress.Commands.add('loginCheckout', () => {
  cy.goToMiniCart()
  cy.get('#top-cart-btn-checkout').click()
  cy.get('#customer-email').type(Cypress.env('USER_EMAIL'))
  cy.get('input#pass:eq(1)')
    .should('be.visible')
    .type(`${Cypress.env('USER_PASSWORD')}{enter}`)
})