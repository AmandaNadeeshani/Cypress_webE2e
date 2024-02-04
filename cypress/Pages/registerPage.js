export class registerPage{
    weblocators={
        fname:'#input-firstname',
        lname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password: '#input-password',
        confirmpsw:'#input-confirm',
        policycheck: 'input[type="checkbox"]',
        btncontinue: 'input[type="submit"]'
    }
        opwnURL(){
            cy.visit(Cypress.env('URL'))
        }
    enterfirstname(fname){
        cy.get(this.weblocators.fname).type(fname)
    }

    enterlastname(lastname){
        cy.get(this.weblocators.lname).type(lastname)
    }
    enteremail(email){
        cy.get(this.weblocators.email).type(email)
    }
    entertelephone(mphone){
        cy.get(this.weblocators.telephone).type(mphone)
    }
    enterpassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmpsw).type(password)
    } 
    selectcheck(){
        cy.get(this.weblocators.policycheck).check()
    }
    enterbtncontinue(){
        cy.get(this.weblocators.btncontinue).click()
    }
}