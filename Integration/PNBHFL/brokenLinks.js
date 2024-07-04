///<reference types='cypress' />
describe("brken links",function()
{
    it('testcase',function()
    {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
         cy.visit('https://webserver-pnbhousingdigitalplatform-uat.pnbhousing.com/investors/policies') 
        // Use cy.get to select links and check their href attribute
    cy.get('a').each(($a) => {
      const href = $a.prop('href');
      if (href) {
        // Use cy.request with failOnStatusCode: false option
        cy.request({
          url: href,
          failOnStatusCode: false,
        }).then((response) => {
          // Log the status code for each link
          cy.log(`Link: ${href}, Status Code: ${response.status}`);
          
          // Optionally, add assertions or checks based on the response
          // For example: expect(response.status).to.be.oneOf([200, 404]);
        });
      }
    });
  })
      })   
              
          
          
          

