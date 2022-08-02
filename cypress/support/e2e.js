/* eslint-disable no-unused-vars */

import './commands'
import 'cypress-mailosaur'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

