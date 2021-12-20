import { personalDoLogin } from "../../../helpers/user_actions";

describe('home personal do login', () => {
  beforeEach(() => {
    cy.request('POST', 'localhost:3000/api/e2e/setup')
    cy.visit('http://localhost:4200/');
  });

  it('redirect to home page if try to access path without login', () => {
    cy.visit('http://localhost:4200/home/personal');
    cy.url().should('equal', 'http://localhost:4200/home/login')
  })

  it('redirects to personal home page when login is correct', () => {
    personalDoLogin(cy)
    cy.url().should('equal', 'http://localhost:4200/home/personal');
  })
})
