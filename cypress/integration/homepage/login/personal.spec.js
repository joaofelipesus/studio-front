describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('redirect to home page if try to access path without login', () => {
    cy.visit('http://localhost:4200/home/personal');
    cy.url().should('equal', 'http://localhost:4200/home')
  })

  it('redirects to personal home page when login is correct', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '/api/users/login',
      },
      {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDVkMTcxODktZWM1Yy00NWJmLTk5YjQtOTc2MGIwZWQzYzVhIiwia2luZCI6InBlcnNvbmFsIiwiZXhwIjoxNjM4OTE5Njk4fQ.wRMIHOoTbNELyNeOkGXe2PB-6hddGQUss3fiEkJqoRA"
      }
    ).as('authUser')
    cy.get('[routerlink="/login"]').click();
    cy.get('#email').type('asuka@nerv.com');
    cy.get('#password').type('123123123');
    cy.get('.btn-primary').click();
    cy.url().should('equal', 'http://localhost:4200/home/personal');
  })

  it('redirects to home page when user token belongs to a student', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '/api/users/login',
      },
      {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTk3ODZkMTEtYmZjNS00OWFiLThiYmYtYjQwMGNkNTJjYTViIiwia2luZCI6InN0dWRlbnQiLCJleHAiOjE2Mzg5MjAwMDd9.925SD6TaFudT3ZjvDUcAy8hlaeRrW_X-5oKjW0XTGLk"
      }
    ).as('authUser')
    cy.get('[routerlink="/login"]').click();
    cy.get('#email').type('shinji@nerv.com');
    cy.get('#password').type('123123123');
    cy.get('.btn-primary').click();
    cy.url().should('equal', 'http://localhost:4200/home');
  })

})
