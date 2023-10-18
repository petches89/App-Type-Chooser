/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('Test 1', () => {

    cy.visit("https://betterask.erni/apptype-chooser/")
    cy.ClickStart()

    cy.CheckOption(1)
    cy.VerifyCheckCircle(1)

    cy.CheckOption(2)
    cy.VerifyCheckCircle(2)
    cy.VerifyCircle(1)
    cy.VerifyCircle(3)
  })
})