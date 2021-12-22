export class User {
  public name: string;
  public email: string;
  public password: string;

  constructor(
    { name, email, password }:
    { name?: string, email?: string, password?: string }
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  formatedName() {
    const splittedNames: Array<String> = this.name.split(' ');
    const firstName = splittedNames[0];
    const lastName = splittedNames[splittedNames.length - 1];
    return `${firstName} ${lastName}`;
  }

}
