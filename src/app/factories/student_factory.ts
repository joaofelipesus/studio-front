import { Student } from "../models/student";
import { User } from "../models/user";

export class StudentFactory {
  static build(params) : Student {
    const studentParams = params['student'];
    return new Student({
      id: studentParams.id,
      personalId: studentParams.personal_id,
      user: new User({name: studentParams['user']['name']})
    })
  }
}
