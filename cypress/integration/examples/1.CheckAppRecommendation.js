/// <reference types="Cypress" />

describe('App Chooser Test', () => 
{

    it('Test 1', () => 
    {

    cy.visit("https://betterask.erni/apptype-chooser/")
    cy.ClickStart()

    // cy.get(':nth-child(1) > .form-check-label').click()
    // cy.ClickNext()
    
    for(var i=0;i<11;i++){
    cy.SelectFirst()
    cy.ClickNext()
    }

    // cy.get('#name').type('Petronela')
    // cy.get('#mailAddress').type('test@gmail.com')
    // cy.get('#company').type('TestingGmbH')
    // cy.get('#phone').type('+41765356089')
    
    cy.FillInPersonalInformations()
    cy.ClickNext()

    
    
    // var header=cy.NthHeader(1);
    
    // //cy.get(':nth-child(1) > .card > .card-header > .row > .col-11 > h3');
    
    // header.should('include.text', 'Hybrid')
    // header.children().eq(0).should('include.text', '100%')
  
 
    // header=cy.NthHeader(2);
    
    // //cy.get(':nth-child(1) > .card > .card-header > .row > .col-11 > h3');
    
    // header.should('include.text', 'Native')
    // header.children().eq(0).should('include.text', '56%')

    cy.NthHeaderAssert(1, 'Hybrid', '100')
    cy.NthHeaderAssert(2, 'Native', '56')
    cy.NthHeaderAssert(3, 'Cross-Platform', '44')
    cy.NthHeaderAssert(4, 'PWA', '12')




  })
})