import { Transaction } from './transaction.model';
import { User } from './user.model';

export class Wallet {

  public balance: number;
  public _embedded: {
    owner: User,
    transactions: Transaction[]
  };

  constructor(balance: number, _embedded: { owner: User, transactions: Transaction[] }) {
    this.balance = balance;
    this._embedded = _embedded;
  }
}
