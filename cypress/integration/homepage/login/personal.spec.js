import { personalDoLogin } from "../../../helpers/user_actions";

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('redirect to home page if try to access path without login', () => {
    cy.visit('http://localhost:4200/home/personal');
    cy.url().should('equal', 'http://localhost:4200/home')
  })

  it('redirects to personal home page when login is correct', () => {
    personalDoLogin(cy)
    cy.url().should('equal', 'http://localhost:4200/home/personal');
  })

  it('redirects to home page when user token belongs to a student', () => {
    cy.url().should('equal', 'http://localhost:4200/home');
  })

})
