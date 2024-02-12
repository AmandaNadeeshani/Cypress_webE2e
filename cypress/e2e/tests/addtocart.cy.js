import { HomePage } from "../../Pages/homePage"
const homeobj= new HomePage()
import testData from '../../fixtures/TestData.json'


describe('Test login',()=>{
    before(()=>{
        cy.login(testData.login.username, testData.login.password)
    })
    
    it('login', ()=>{
        HomePage.searchproduct(testData.product.productname);
        homeobj.addToCard()
        homeobj.verifySuccessMsg().should('contain',testData.message.successmsg).and('contain',testData.product.productname);

     })

  

})