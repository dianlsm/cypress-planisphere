
import ReservePage from '../pages/ReservePage'


describe('Reserve Flow', () => {
    const reservePage = new ReservePage()
    let userReserve

    before(() => { //dijalankan sekali sebelum semua test di dalam describe.
      cy.fixture('userReserve').then((reservation) => { // membaca file 'userReserve' yang berisi data dummy
        userReserve = reservation //memasukkan isi data ke variabel userLogin
      })
    })
    
    beforeEach(() => { //dijalankan sebelum setiap test case
      reservePage.visit() //panggil method visit, instance dari class Reservepage 
    })

    it('Successful access reserve', () => {  
      cy.url().should('include', '/plans.html')
      cy.contains('Plan with special offers').should('be.visible')
      cy.contains('$70.00 per guest').should('be.visible')
      cy.contains('at least 1 person(s)').should('be.visible')
    })

    // it('Open reserve page in same tab', () => {
    //   reservePage.reserveRoom()

    //   cy.url().should('include', '/reserve.html')
    //   cy.contains('Reservation').should('be.visible') 
    // });

    // it('Open reserve page in new tab', () => {
    //   reservePage.reserveRoom()

    //   cy.url().should('include', '/reserve.html')
    //   cy.contains('Reservation').should('be.visible')
    // });

    it('Successful Reservation with data valid', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.validReservation)
      reservePage.confirmReservation()
      reservePage.submitReservation()
      cy.wait(1000) // delay 2 detik
      reservePage.btnClose()
      
      cy.contains('Confirm Reservation').should('be.visible')
      cy.contains('Total $97.50 (included taxes)').should('be.visible')
      cy.contains('h5.modal-title', 'Thank you for reserving.').should('be.visible')
      cy.get('div.modal-body').should('contain.text', 'We look forward to visiting you.')
    });

    it('Successful Reservation with Only Required Fields', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.requiredReservation)
      reservePage.confirmReservation()
      reservePage.submitReservation()
      cy.wait(1000) // delay 2 detik
      reservePage.btnClose()

      cy.contains('Confirm Reservation').should('be.visible')
      cy.contains('Total $87.50 (included taxes)').should('be.visible')
      cy.contains('h5.modal-title', 'Thank you for reserving.').should('be.visible')
      cy.get('div.modal-body').should('contain.text', 'We look forward to visiting you.')
    });

    it('Successful Reservation with confirmation by email', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.confirmationEmail)
      reservePage.confirmReservation()
      reservePage.submitReservation()
      cy.wait(1000) // delay 2 detik
      reservePage.btnClose()

      cy.contains('Confirm Reservation').should('be.visible')
      cy.contains('Total $80.00 (included taxes)').should('be.visible')
      cy.contains('h5.modal-title', 'Thank you for reserving.').should('be.visible')
      cy.get('div.modal-body').should('contain.text', 'We look forward to visiting you.')
    });

    it('Successful Reservation with all additional plans', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.allPlans)
      reservePage.confirmReservation()
      reservePage.submitReservation()
      cy.wait(1000) // delay 2 detik
      reservePage.btnClose()

      cy.contains('Confirm Reservation').should('be.visible')
      cy.contains('Total $117.50 (included taxes)').should('be.visible')
      cy.contains('h5.modal-title', 'Thank you for reserving.').should('be.visible')
      cy.get('div.modal-body').should('contain.text', 'We look forward to visiting you.')
    });

    it('Should show error when the input value is 0', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.stayZero)
      reservePage.confirmReservation()
  
      cy.contains('Value must be greater than or equal to 1.').should('exist')
    });

    it('Should show error when the input value is 10', () => {
      reservePage.reserveRoom()
      reservePage.fillReserve(userReserve.stayTen)
      reservePage.confirmReservation()
  
      cy.contains('Value must be less than or equal to 9.').should('exist')
    });






  })