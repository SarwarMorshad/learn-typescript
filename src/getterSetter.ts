class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  //   // Setter method to update the user balance
  //   addBalance(amount: number) {
  //     this.userBalance += amount;
  //     // console.log(`Added ${amount} to balance. New balance: ${this.userBalance}`);
  //   }
  // Setter
  set addBalance(amount: number) {
    this.userBalance += amount;
    console.log(`Added ${amount} to balance. New balance: ${this.userBalance}`);
  }

  //   //   Getter method to retrieve the user balance
  //   getBalance() {
  //     return this.userBalance;
  //   }
  // }

  // Getter
  get getBalance() {
    return this.userBalance;
  }
}

const myAccount = new BankAccount(101, "John Doe", 1000);
// myAccount.addBalance(500);
// console.log(`Current balance: ${myAccount.getBalance()}`);

myAccount.addBalance = 500;
myAccount.getBalance;

console.log(myAccount.getBalance);
