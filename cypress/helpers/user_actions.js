function personalDoLogin(cy) {
  cy.visit('localhost:4200')
  cy.get('#nav-dropdown').click();
  cy.get('[routerlink="/home/login"]').click();
  cy.get('#email').type('personal@e2e.com');
  cy.get('#password').type('123123123');
  cy.get('.btn-primary').click();
}

function studentDoLogin(cy) {
  cy.intercept(
    {
      method: 'POST',
      url: '/api/users/login',
    },
    {
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTk3ODZkMTEtYmZjNS00OWFiLThiYmYtYjQwMGNkNTJjYTViIiwia2luZCI6InN0dWRlbnQiLCJleHAiOjE2Mzg5MjAwMDd9.925SD6TaFudT3ZjvDUcAy8hlaeRrW_X-5oKjW0XTGLk"
    }
  ).as('authUser')
  cy.get('#nav-dropdown').click();
  cy.get('[routerlink="/login"]').click();
  cy.get('#email').type('shinji@nerv.com');
  cy.get('#password').type('123123123');
  cy.get('.btn-primary').click();
}

export { personalDoLogin, studentDoLogin }
