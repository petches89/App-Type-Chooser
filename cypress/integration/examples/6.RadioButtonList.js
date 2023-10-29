/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('OnlyOneRadioButtonCanBeSelectedSimultaneously', () => {

    cy.visit("/")
    cy.ClickStart()

    cy.CheckOption(1)
    cy.VerifyCheckCircle(1)

    cy.CheckOption(2)
    cy.VerifyCheckCircle(2)
    cy.VerifyCircle(1)
    cy.VerifyCircle(3)
  })
})