import { Transaction } from './transaction.model';
import { User } from './user.model';

export class Wallet {

  public balance: number;
  public owner: User;
  transactions: Transaction[];

  constructor(balance: number, owner: User, transactions: Transaction[] ) {
    this.balance = balance;
    this.owner = owner;
    this.transactions = transactions;
  }
}
