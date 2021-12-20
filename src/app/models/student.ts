import {User} from './user'

export class Student {
  public id?: string;
  public personalId?: string;
  public user: User

  constructor(
    { id, personalId, user } :
    { id: string, personalId: string, user: User}
  ) {
    this.id = id;
    this.personalId = personalId;
    this.user = user;
  }
}
