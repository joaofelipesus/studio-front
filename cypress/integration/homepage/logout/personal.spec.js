import { personalDoLogin} from '../../../helpers/user_actions';

describe('example to-do app', () => {
  it('navigates user to home path', () => {
    personalDoLogin(cy);
    cy.get('#nav-dropdown').click();
    cy.get('#logout').click()
    cy.url().should('equal', 'http://localhost:4200/home');
  })
})
