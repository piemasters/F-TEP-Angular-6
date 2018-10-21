import { User } from './user.model';

export class Transaction {
  public owner: User;
  public associatedId?: number;
  public balanceChange: number;
  public transactionTime: string;
  public type: string;
  public id: number;

  constructor(owner: User, associatedId: number, balanceChange: number, transactionTime: string, type: string, id: number) {
    this.owner = owner;
    this.associatedId = associatedId;
    this.balanceChange = balanceChange;
    this.transactionTime = transactionTime;
    this.type = type;
    this.id = id;
  }
}
