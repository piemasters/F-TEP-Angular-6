export class User {
  public name: string;
  public role: string;
  public email: string;
  public id: number;

  constructor(name: string, role: string, email: string, id: number) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.id = id;
  }
}
