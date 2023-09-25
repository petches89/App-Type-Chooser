/// <reference types="Cypress" />
import HomePage from "./PageObjects/HomePage"

describe('My First Test', () => 
{
  const homePage=new HomePage()

  before(function() {
    // root-level hook
    // runs once before all tests

    cy.fixture('example').then(function(data)
    {
      // with "this" I'm reffering to the entire class, so it is available globaly
this.data=data

    })
  })


    it('My FirstTest case', function() 
    {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')

      //cy.get('form input.form-control[name="name"]').type('Bob')

      //cy.get(':nth-child(1) > .form-control"]').type('Bob')
      //after definig date in fixtures
      //cy.get(':nth-child(1) > .form-control"]').type(this.data.name)
      cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
      cy.get('select').select(this.data.gender)
      //checking if the value attribute for that edit box is Bob or not
      cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
      //verify if the property is minlength or not
      //cy.get('input[name="name"]:nth-child(2)').should('have.minlength') - this will not work, not valid attribute in jQuery, but we use:
      cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
      cy.get('input[name="name"]:nth-child(2)').should('have.attr','type','text')
      cy.get('input[name="name"]:nth-child(2)').should('have.attr','required')
      //validate if the element is disabled or not
      cy.get('#inlineRadio3').should('be.disabled')


      //navigate to the shop tab
      cy.get(':nth-child(2) > .nav-link').click()
      //select products on this page but you never know in which order they will get displayed. So based on the text you have to select add button. 
      //So we need to write one generic function where if you pass that product name automatically that function should take your product name as input
      //and it should be able to clidk the add button. So firstly you need to grab all the texts using one locator, then we can iterate through that area of text
      //to find desire text what we are looking for. 
      //so each time you will get one element so you can simply get the text of that element (el)
      //if the text equals Blackberry then handle the situation -> click Add button, but how?
      //get all add buttons, out of four I want to click on the same index as blackberry add button is present


      // cy.get('h4.card-title').each(($el, index, $list) => {
      //   if($el.text().includes('Blackberry'))
      //   {
      //     cy.get('button.btn.btn-info').eq(index).click()
      //   }        


      // })

      //iterate through this area and pull up each and every value present in this area and reapeat this select product step for each element present in this productName area

      this.data.productName

      //how to iterate through area in javascript?
      //our area is this.data.productName -> it has 2 elements, so it will iterate both values there. By adding cy.selectProcuct(element) - 
      this.data.productName.forEach(element => {
        cy.selectProduct(element)
        
      })















  


  })
})