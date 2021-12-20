import { personalDoLogin } from "../../helpers/user_actions"
import { interceptExerciseListRequest } from "../../request-mocks/exercises";
import { interceptGetExerciseRequest } from "../../request-mocks/exercises/get";
import { muscularGroupsIndexRequestMock } from "../../request-mocks/muscular_group";

describe("personal updating exercise", () => {

  beforeEach(() => {
    personalDoLogin(cy);
    cy.request('POST', 'localhost:3000/api/e2e/setup?update_exercise=true')
    // muscularGroupsIndexRequestMock(cy);
    // interceptExerciseListRequest(cy);
    // interceptGetExerciseRequest(cy);
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
    // cy.intercept(
    //   {
    //     method: 'PUT',
    //     url: '/api/exercises/0254ddf6-650b-4443-83ee-a4a0cb3b4c66' },
    //     {
    //       statusCode: 200,
    //       body: {
    //         "exercise": {
    //           "id": "0254ddf6-650b-4443-83ee-a4a0cb3b4c66",
    //           "name": "Algum novo nome",
    //           "muscular_group_id": "a123a1e0-0517-45be-8d3a-f314b4e9b5ab",
    //           "muscular_group": {
    //             "name": "Glúteos"
    //           }
    //         }
    //       }
    //   }
    // ).as('sendUpdateExerciseForm');
      // todo: add test case
    cy.get('#name').type(' Updated [e2e]');
    cy.get('.btn').click();
    cy.url().should('equal', 'http://localhost:4200/exercises/f518aca0-61b9-11ec-90d6-0242ac120003');
  })
})
