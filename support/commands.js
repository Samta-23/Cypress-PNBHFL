// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

  
/*Cypress.Commands.add('HandleError',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('list not defined')) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })*/
      /*Cypress.Commands.add("login",(user,password)=>{
        cy.get('[data-testid="login-pwd"]').type(password)
        cy.get('[data-testid="login-btn"]').click()
      })

      Cypress.Commands.add("loginSession",(user,password) => {
          cy.session("Session",()=> {
          cy.visit("http://vayanjan-dev.s3-website-us-east-1.amazonaws.com/")
          cy.login(user,password)
          cy.url().should("include","welcome")
      })*/

      //})
    

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })