describe('example to-do app', () => {
  it('navigates user to home path', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '/api/users/login',
      },
      {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDVkMTcxODktZWM1Yy00NWJmLTk5YjQtOTc2MGIwZWQzYzVhIiwia2luZCI6InBlcnNvbmFsIiwiZXhwIjoxNjM4OTE5Njk4fQ.wRMIHOoTbNELyNeOkGXe2PB-6hddGQUss3fiEkJqoRA"
      }
    ).as('authUser')
    cy.visit('localhost:4200')
    cy.get('#nav-dropdown').click();
    cy.get('[routerlink="/login"]').click();
    cy.get('#email').type('asuka@nerv.com');
    cy.get('#password').type('123123123');
    cy.get('.btn-primary').click();
    cy.get('#nav-dropdown').click();
    cy.get('#logout').click()
    cy.url().should('equal', 'http://localhost:4200/home');
  })
})
