/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('Test 1', () => {

    cy.visit("https://betterask.erni/apptype-chooser/")
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