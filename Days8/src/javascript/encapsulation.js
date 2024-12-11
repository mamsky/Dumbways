class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const accountBCA = new BankAccount();

console.log(accountBCA.balance); // Sebelum di isi

accountBCA.deposit(100); //top up saldo V
console.log(accountBCA.getBalance()); //sudah diisi

accountBCA.balance = 500000; // override saldo XXXXXX
console.log(accountBCA.getBalance());
