import { StudentFactory } from './student_factory';

describe('StudentFactory#build', () => {
  it('reutrn a studet object', () => {
    const params = {
      "student": {
        "id": "b64aa554-257e-4a3a-80dd-24ef761ea9a1",
        "personal_id": "bb95b3e2-f117-40cc-87f7-e75a25979e96",
        "user": {
          "name": "Asuka Langley"
        }
      }
    }

    const student = StudentFactory.build(params);
    expect(student.id).toMatch('b64aa554-257e-4a3a-80dd-24ef761ea9a1');
    expect(student.personalId).toMatch('bb95b3e2-f117-40cc-87f7-e75a25979e96')
    expect(student.user.name).toMatch('Asuka Langley')
  })
})
