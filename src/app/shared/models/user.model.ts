export class User {
  public id: number;
  public name: string;
  public role: string;
  public email: string;
  public walletId: number;

  constructor(id: number, name: string, role: string, email: string, walletId: number) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.email = email;
    this.walletId = walletId;
  }
}
