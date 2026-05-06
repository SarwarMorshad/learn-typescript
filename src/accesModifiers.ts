class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(amount: number) {
    this.userBalance += amount;
    console.log(`Added ${amount} to balance. New balance: ${this.userBalance}`);
  }
}

const myAccount = new BankAccount(101, "John Doe", 1000);
myAccount.addBalance(500);
