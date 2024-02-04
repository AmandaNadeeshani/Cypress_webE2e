import { registerPage } from "../../Pages/registerPage"
const registerobj = new registerPage();
import registerData from '../../fixtures/registerData.json'


describe('verify th login' ,()=> {
it('register flow', () =>{
    registerobj.opwnURL();
    registerobj.enterfirstname(registerData.Firstname);
    registerobj.enterlastname(registerData.LastName)
    registerobj.enteremail(registerData.email)
    registerobj.entertelephone(registerData.mphone)
    registerobj.enterpassword(registerData.password)
    registerobj.selectcheck()
    registerobj.enterbtncontinue()
})


} )