function interceptGetExerciseRequest(cy) {
  cy.intercept(
    {
      method: 'GET',
      url: '/api/exercises/0254ddf6-650b-4443-83ee-a4a0cb3b4c66'
    },
    {
      "exercise": {
        "id": "0254ddf6-650b-4443-83ee-a4a0cb3b4c66",
        "name": "4 Apoios Joelho Estendido",
        "muscular_group_id": "a123a1e0-0517-45be-8d3a-f314b4e9b5ab",
        "muscular_group": {
          "name": "Glúteos"
        }
      }
    }
  ).as('getExercise')
}

export { interceptGetExerciseRequest }
