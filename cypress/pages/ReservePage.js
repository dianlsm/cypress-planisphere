import { number } from "assert-plus"

class ReservePage {
    visit() {
       // Buka halaman utama
      cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/index.html')
      
      // Klik link menuju halaman Reserve/Plans
      cy.get('a.nav-link[href="./plans.html"]').click()
    }

    reserveRoom(){
      cy.get('a.btn.btn-primary')
      .invoke('removeAttr', 'target') // hapus target="_blank" agar tidak pindah tab
      .click()
    }

    reserveRoomNew(){
      cy.get('a.btn.btn-primary')
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit('href')
      })
    }

    fillCheckIn(checkin) {
      cy.get('#date').clear().type(checkin);
    }
    

    // fillStay(stay){
    //   cy.get('#term').clear().type(stay)
    // }

    fillStay(stay){
      cy.get('body').click(0,0);   // tutup popup datepicker
      cy.get('#term').clear().type(stay);
    }
    
    
    fillGuests(guest) {
      cy.get('#head-count').clear().type(guest);
    }
  
    fillAdditional(additional){
      if (Array.isArray(additional)) {
        additional.forEach(option => {
          cy.contains('label.form-check-label', option).click()
        })
      } else {
        cy.contains('label.form-check-label', additional).click()
      }
    }
    
    fillName(name){
      cy.get('#username').type(name);
    }

    fillConfirmation(confirmation){
      cy.get('#contact').select(confirmation);
    }

    fillRequest(request){
      cy.get('#comment').clear().type(request);
    }

    confirmReservation(){
      cy.get('#submit-button').click()
    }

    confirmEmail(email){
      cy.get('#email').clear().type(email);
    }

    submitReservation(){
      cy.get('button[data-target="#success-modal"]').click()
    }

    btnClose(){
      cy.get('.btn.btn-success').click()
    }

    fillReserve(datareserve) {
      if (datareserve.checkin) this.fillCheckIn(datareserve.checkin)
      if (datareserve.stay) this.fillStay(datareserve.stay)
      if (datareserve.guest) this.fillGuests(datareserve.guest)
      if (datareserve.additional) this.fillAdditional(datareserve.additional)
      if (datareserve.name) this.fillName(datareserve.name)
      if (datareserve.confirmation) this.fillConfirmation(datareserve.confirmation)
      if (datareserve.email) this.confirmEmail(datareserve.email)
      if (datareserve.request) this.fillRequest(datareserve.request)
    }
  
  }
  
  export default ReservePage
  