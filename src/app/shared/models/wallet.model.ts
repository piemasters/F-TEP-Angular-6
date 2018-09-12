import { Transaction } from './transaction.model';

export class Wallet {
  public balance: number;
  public transactions: Transaction[];

  constructor(balance: number, transactions: Transaction[]) {
    this.balance = balance;
    this.transactions = transactions;
  }
}
