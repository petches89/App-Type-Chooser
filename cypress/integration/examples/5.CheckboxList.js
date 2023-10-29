/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('CheckboxesSupportMultipleSelection', () => {

    cy.visit("/")
    cy.ClickStart()

    cy.SelectFirst()
    cy.ClickNext()

cy.CheckOption(1)
cy.CheckOption(2)
cy.CheckOption(3)

cy.VerifyCheckbox(1)
cy.VerifyCheckbox(2)
cy.VerifyCheckbox(3)
  })
})