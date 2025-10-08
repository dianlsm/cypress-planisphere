// cypress/e2e/signIn.spec.js
import SigninPage from '../pages/SignInPage'


describe('Sign In Flow', () => {
    const signinPage = new SigninPage()
    let userLogin //variabel menyimpan data login dari fixture (userLogin.js).
  
    before(() => { //dijalankan sekali sebelum semua test di dalam describe.
      cy.fixture('userLogin').then((data) => { // membaca file 'userLogin' yang berisi data dummy
        userLogin = data //memasukkan isi data ke variabel userLogin
      })
    })
  
    beforeEach(() => { //dijalankan sebelum setiap test case
      signinPage.visit() //panggil method visit, instance dari class SigninPage 
    })

  
    it('Successful Login with Valid Email and Valid Password', () => {
      signinPage.login(userLogin.validUser.email, userLogin.validUser.password)
  
      cy.url().should('include', '/mypage.html')
      cy.contains(userLogin.validUser.email).should('exist')

    })

    it('Should show error when Email Invalid', () => {
      signinPage.login(userLogin.invalidEmail.email, userLogin.invalidEmail.password)
      cy.contains('Email or password is invalid.').should('be.visible')
    })
  
    it('Should show error when Password Invalid', () => {
      signinPage.login(userLogin.invalidPassword.email, userLogin.invalidPassword.password)
      cy.contains('Email or password is invalid.').should('be.visible')
    })

    it('Should show error when Email and Password Invalid', () => {
      signinPage.login(userLogin.invalidEmailPassword.email, userLogin.invalidEmailPassword.password)
      cy.contains('Email or password is invalid.').should('be.visible')
    })

    it('Should show error when Email field is left empty', () => {
      signinPage.login(userLogin.emailEmpty.email, userLogin.emailEmpty.password)
      cy.contains('Please fill out this field.').should('be.visible')
    })

    it('Should show error when Password field is left empty', () => {
      signinPage.login(userLogin.passwordEmpty.email, userLogin.passwordEmpty.password)
      cy.contains('Please fill out this field.').should('be.visible')
    })

    it('Should show error for Invalid Email Format ', () => {
      signinPage.login(userLogin.invalidFormatEmail.email, userLogin.invalidFormatEmail.password)
  
      cy.url().should('include', '/mypage.html')
      cy.contains(userLogin.validUser.email).should('exist')
    })

    it('Should show error Emails with mixed case ', () => {
      signinPage.login(userLogin.emailCaseSensitive.email, userLogin.invalidFormatEmail.password)
      cy.contains('Email or password is invalid.').should('be.visible')
    })

    it('Should show error Emails with mixed case ', () => {
      signinPage.login(userLogin.passwordSpace.email, userLogin.passwordSpace.password)
      cy.contains('Email or password is invalid.').should('be.visible')
    })
  })