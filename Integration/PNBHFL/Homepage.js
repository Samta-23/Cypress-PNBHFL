/// <reference types='cypress' />



describe ('Home page', function()
{
  
    it("Home Loan form EXception", function()
    {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      
        
      cy.visit("https://webserver-pnbhousingdigitalplatform-uat.pnbhousing.com/home")
      cy.get('.close-modal-button > .close').click()  
      cy.get(':not(iframe)').then(($elements) => 
        {
          //  $elements.
          cy.get('#_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_fullName').type("samta")
          cy.get("#_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_email").type("sam@gmail.co")
          cy.get("#_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_mobile").type("9027894503")
          cy.get('#select2-_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_loanAmount-container')
          .click({force:true})
         // cy.get('.select2-results__option select2-results__option--selectable select2-results__option--selected')
          
          cy.get('li.select2-results__option.select2-results__option--selectable')
          
          .contains('Up to ₹ 5 Lakhs')
          .click();
          cy.get('#_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_CustomerDetails > :nth-child(6) > .select2 > .selection > .select2-selection').click()
         //  cy.get('li#select2-_com_pnb_home_loan_ComPnbHomeLoanPortlet_INSTANCE_alog_location-result-aaaw-Ahmedabad')
          //.contains("Ahmedabad").click()
          cy.get('li.select2-results__option.select2-results__option--selectable')
          
          .contains('Ajmer')
          .click();
          cy.get("button.btn.btn-primary").contains("Submit").click()         })
 
        })
      })
        

