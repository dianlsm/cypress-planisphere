
class SignupPage {
    visit() {
      cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/index.html')
      cy.get('a.nav-link[href="./signup.html"]').click()
    }
  
    fillEmail(email) {
      cy.get('#email').clear().type(email)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
      cy.get('#password-confirmation').type(password)
    }

    fillPasswordConfirm(password) {
      cy.get('#password-confirmation').type(password)
    }

    fillUsername(username) {
      cy.get('#username').type(username)
    }
  
    selectPlan(plan = 'premium') {
      cy.get(`input[type="radio"][value="${plan}"]`).check()
    }
  
    fillAddress(address) {
      cy.get('#address').type(address)
    }
  
    fillTel(tel) {
      cy.get('#tel').type(tel)
    }
  
    selectGender(gender) {
      cy.get('#gender').select(gender)
    }
  
    fillBirthday(birthday) {
      cy.get('#birthday').type(birthday)
    }
  
    enableNotification() {
      cy.get('#notification').check()
    }
  
    submit() {
      cy.get('button[type="submit"]').click()
    }
  
    fillForm(user) {
      if (user.email) this.fillEmail(user.email)
      if (user.password) this.fillPassword(user.password)
      if (user.username) this.fillUsername(user.username)
      if (user.plan) this.selectPlan(user.plan)
      if (user.address) this.fillAddress(user.address)
      if (user.tel) this.fillTel(user.tel)
      if (user.gender) this.selectGender(user.gender)
      if (user.birthday) this.fillBirthday(user.birthday)
      if (user.notification) this.enableNotification()
    }
    
  }
  
  export default SignupPage
  