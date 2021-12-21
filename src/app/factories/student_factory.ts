import { Student } from "../models/student";
// import { User } from "../models/user";
import { UserFactory } from './user_factory';
export class StudentFactory {
  static build(params) : Student {
    const studentParams = params['student'];
    return new Student({
      id: studentParams.id,
      personalId: studentParams.personal_id,
      user: UserFactory.build(studentParams)
    })
  }
}
