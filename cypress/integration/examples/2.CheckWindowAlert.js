/// <reference types="Cypress" />

describe('App Chooser Test', () => {
  
  it('NotEnoughSelections_AlertAppears', () => {

    cy.visit("/")
    cy.ClickStart()

    for (var i = 0; i < 5; i++) {
      cy.SelectFirst()
      cy.ClickNext()
    }

    for (var i = 0; i < 6; i++) {
      cy.ClickNext()
    }

    cy.ClickSeeResult()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please answer at least 6 questions to get a meaningful result.')
    })
  })
})