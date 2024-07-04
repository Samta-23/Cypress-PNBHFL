export const HandleError = () => {
    // Handle uncaught error
    cy.on("uncaught exception",(err, runnable)=>{
        return false
    })
  };
  
  export const visitSite = ()=>
  {
    cy.visit("https://webserver-pnbhousingdigitalplatform-uat.lfr.cloud/web/guest/fixed-deposits")
  } 




