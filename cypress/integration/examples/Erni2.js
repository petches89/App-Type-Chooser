/// <reference types="Cypress" />

describe('App Chooser Test', () => 
{

    it('Test 1', () => 
    {

    cy.visit("https://betterask.erni/apptype-chooser/")
    cy.get(".btn").click()
    cy.get(':nth-child(1) > .form-check-label').click()
    cy.ClickNext()
    
    for(var i=0;i<11;i++){
    cy.ClickNext()
    }

    // cy.get('#name').type('Petronela')
    // cy.get('#mailAddress').type('test@gmail.com')
    // cy.get('#company').type('TestingGmbH')
    // cy.get('#phone').type('+41765356089')
    // cy.ClickNext()

    cy.on('window:alert', (str)=>
    {
      expect(str).to.equal('Please answer at least 6 questions to get a meaningful result.')
    })

    //cy.FillUp()

  
    
    
  

  })
})