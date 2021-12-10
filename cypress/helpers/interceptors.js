function interceptMuscularGroups(cy){
  cy.intercept(
    {
      method: 'GET',
      url: '/api/muscular_groups'
    },
    {
      "muscular_groups": [
        {
          "muscular_group": {
            "id": "d4d82ad3-90f3-4de9-8f1e-9ded7c3d444a",
            "name": "Abdomên"
          }
        },
        {
          "muscular_group": {
            "id": "4cbd6fac-8306-471b-a0b0-57f916ed34af",
            "name": "Antebraço"
          }
        },
        {
          "muscular_group": {
            "id": "5da45b16-8011-444d-9b9a-acabd18e61d3",
            "name": "Bíceps"
          }
        },
        {
          "muscular_group": {
            "id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "name": "Coxas"
          }
        }
      ]
    }
  ).as('getMuscularGroups')
}


export { interceptMuscularGroups }
