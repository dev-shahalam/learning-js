  //   * Using ES6 Classes *
  
class bankAccount {

    #balance = 0;

    diposit(amount) {
        return this.#balance += amount;
    }

    cashOut(amount) {
        if (amount<=this.#balance){
            this.#balance-=amount;
        }else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        return this.#balance;
    }
}



let acc = new bankAccount();
acc.diposit(200);
acc.cashOut(250);
console.log(acc.getBalance());