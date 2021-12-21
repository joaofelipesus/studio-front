import { personalDoLogin } from "../../helpers/user_actions"
import { interceptExerciseListRequest } from "../../request-mocks/exercises";
import { interceptGetExerciseRequest } from "../../request-mocks/exercises/get";
import { muscularGroupsIndexRequestMock } from "../../request-mocks/muscular_group";

describe("personal updating exercise", () => {

  beforeEach(() => {
    personalDoLogin(cy);
    cy.request('POST', 'localhost:3000/api/e2e/setup?update_exercise=true')
    cy.get('#nav-dropdown').click();
    cy.get('#exercise-options').click();
    cy.get('#list-exercise').click();
    cy.get(':nth-child(1) > :nth-child(2) > .btn').click();
    cy.get('.btn').click();
  })

  it("render erros messages", () => {
    cy.get('#name').clear();
    cy.get('.btn').click();
    cy.get('.text-danger').contains('Nome não pode ficar em branco')
  })

  it("redirect to show when arguments are valid", () => {
    cy.get('#name').type(' Updated [e2e]');
    cy.get('.btn').click();
    cy.url().should('equal', 'http://localhost:4200/exercises/f518aca0-61b9-11ec-90d6-0242ac120003');
  })
})
