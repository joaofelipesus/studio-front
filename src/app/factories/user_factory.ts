import { User } from '../models/user'

export class UserFactory {
  static build(params) {
    const studentParams = params['user'];
    return new User({
      email: studentParams['email'],
      name: studentParams['name']
    })
  }
}
