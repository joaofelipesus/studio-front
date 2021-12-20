import { personalDoLogin} from '../../../helpers/user_actions';

describe('user logout', () => {
  it('navigates user to home path', () => {
    personalDoLogin(cy);
    cy.get('#nav-dropdown').click();
    cy.get('#logout').click()
    cy.url().should('equal', 'http://localhost:4200/home');
  })
})
