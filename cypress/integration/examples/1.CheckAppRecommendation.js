/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('WhenExactOptionsSelected_GivesExpectedRecommendation', () => {

    cy.visit("/")
    cy.ClickStart()

    for (var i = 0; i < 11; i++) {
      cy.SelectFirst()
      cy.ClickNext()
    }

    cy.FillInPersonalInformations()
    cy.ClickNext()

    cy.NthHeaderAssert(1, 'Hybrid', '100')
    cy.NthHeaderAssert(2, 'Native', '56')
    cy.NthHeaderAssert(3, 'Cross-Platform', '44')
    cy.NthHeaderAssert(4, 'PWA', '12')
  })
})