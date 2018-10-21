export class User {
  public name: string;
  public role: string;
  public email: string;
  public id: number;
  public walletId: number;

  constructor(name: string, role: string, email: string, id: number, walletId: number) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.id = id;
    this.walletId = walletId;
  }
}
