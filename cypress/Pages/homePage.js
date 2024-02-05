export class HomePage{
    locators={
        serach_input: '.form-control.input-lg',
        click_Search:'.fa.fa-search',
       // product:'img[title="MacBook"]',
        addtocard:'Add to Cart',
        successMsg:'.alert.alert-success.alert-dismissible',
        cart1: '.btn.btn-inverse.btn-block.btn-lg.dropdown-toggle'
        
    }

     searchproduct(productname){
        cy.get(this.locators.serach_input).type(productname)
        cy.get(this.locators.click_Search).click()
     }

     addToCard(){
        cy.contains(this.locators.addtocard).first().click()
     }
     verifySuccessMsg(){
       return cy.get(this.locators.successMsg)
     }

     checkcart(){
        cy.get(this.locators.cart1).click()
     }

}