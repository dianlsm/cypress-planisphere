class SigninPage {
  visit() {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/index.html')
    cy.get('#login-holder a').click()
  }

  fillEmail(email) {
    if (email) cy.get('#email').clear().type(email)
  }

  fillPassword(password) {
    if (password) cy.get('#password').type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}

export default SigninPage
