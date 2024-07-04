/// <reference types='cypress' />
/*import { contains } from "cypress/types/jquery"
import { visitSite } from "./Global"
import { HandleError } from "./Global"*/
describe("sTICKY MENU",function()
{
  let interceptedRequest;
  let request;


    it("call back", function()
    {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
        cy.visit("https://webserver-pnbhousingdigitalplatform-uat.pnbhousing.com/home")
        //cy.get(".downloadBrochure").children(".close").click()
        cy.get('.close-modal-button > .close').click()
        cy.get('.sticky-callBack').click()
        cy.fixture("example.json").then((data)=>{
        cy.get('#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_fullName').type(data.name)
        cy.get('#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_email').type(data.email)
        })
            cy.get('#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_mobile').type('9027894503')
            cy.get("#select2-_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_loanType-container").click()
            cy.get('li.select2-results__option.select2-results__option--selectable')
    .contains("Home Loan")
    .click({force: true})

    cy.get("#select2-_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_loanAmount-container")
       .click({force:true})
            
       cy.get('li.select2-results__option.select2-results__option--selectable')
    .contains("Up to ₹ 5 Lakhs").click({force:true})

        cy.get("#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_location").select("Akola",{force: true})

        cy.get("#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_flexCheckDefault").check({force: true})
        
        cy.get('#_com_pnb_call_back_ComPnbCallBackPortlet_INSTANCE_callbackcontent_CustomerDetails > .btn-primary').click({force: true})
           let param11Value
       /* cy.intercept('POST', 'https://onepointuatservices.pnbhousing.com/UAT/OnePoint/Stock/oss_set_sms_function', (req) => {
          // Access the request body directly
          const param11Value = req.body && req.body.PARAM_11;
          cy.log("param11Value :")
          console.log('Request Body:', req.body);
         console.log('PARAM_11 Value:', param11Value);
      
          // Assert or use the extracted PARAM_11 value as needed
          expect(param11Value).to.exist; // Check if PARAM_11 exists in the request body
          // Additional assertions or usage of the extracted value
          
        }).as('apiRequest');
        cy.wait('@apiRequest', {timeout: 7000});
        cy.log("param11Value :", param11Value)*/
        
  
    })
})