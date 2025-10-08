import SignupPage from '../pages/SignUpPage'



describe('Sign Up Flow', () => {
    const signup = new SignupPage()
    let users
  
    before(() => {
      cy.fixture('userRegister').then((data) => {
        users = data
      })
    })
  
    beforeEach(() => {
      signup.visit()
    })
  
    it('Successful Sign Up with All Valid Data', () => {
      signup.fillForm(users.validUser)
      signup.submit()
  
      cy.url().should('include', '/mypage.html')
      cy.contains(users.validUser.username).should('exist')
    })

    it('Successful Sign Up with Only Required Fields', () => {
      signup.fillForm(users.requiredFields)
      signup.submit()
  
      cy.url().should('include', '/mypage.html')
      cy.contains(users.requiredFields.username).should('exist')
    })

    it('Successful Sign Up with Standard Membership selected', () => {
      signup.fillForm(users.standartUser)
      signup.submit()
  
      cy.url().should('include', '/mypage.html')
      cy.contains(users.requiredFields.username).should('exist')
    })

    it('Successful Sign Up with "Receive Notification" box unchecked', () => {
      signup.fillForm(users.boxUnchecked)
      signup.submit()
  
      cy.url().should('include', '/mypage.html')
      cy.contains(users.requiredFields.username).should('exist')
    })

    it('Should show error when Email field is left empty', () => {
      signup.fillForm(users.emailEmpty)
      signup.submit()
  
      cy.contains('Please fill out this field.').should('exist')
    })
  
    it('Should show error for invalid email', () => {
      signup.fillForm(users.invalidEmail)
      signup.submit()
  
      cy.contains('Please enter a non-empty email address.').should('exist')
    })
  
    it('Should show error when using an Email that is already registered', () => {
      signup.fillForm(users.takenEmailUser)
      signup.submit()
  
      cy.contains('Email has already been taken.').should('exist')
    })

    it('Should show error when Password is less than 8 characters', () => {
      signup.fillForm(users.passwordLess)
      signup.submit()
  
      cy.contains('Please match the requested format.').should('exist')
    })

    it('Should show error when Password field is left empty', () => {
      signup.fillForm(users.passwordEmpty)
      signup.submit()
  
      cy.contains('Please fill out this field.').should('exist')
    })

    it('Should show error when Tel number is less than 11 digits', () => {
      signup.fillForm(users.digitLess)
      signup.submit()
  
      cy.contains('Please match the requested format.').should('exist')
    })

    it('Should show error when Tel number is less than 11 digits', () => {
      signup.fillForm(users.digitThan)
      signup.submit()
  
      cy.contains('Please match the requested format.').should('exist')
    })

    it('Should show error when Tel field contains non-numeric characters', () => {
      signup.fillForm(users.digitNonNumeric)
      signup.submit()
  
      cy.contains('Please match the requested format.').should('exist')
    })


  })
