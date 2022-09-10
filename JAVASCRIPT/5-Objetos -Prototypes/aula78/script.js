// --------------------------------------- POLIMORFISMO --------------------------------------- //

function Account(agency, account, balance) {
    this.agency = agency
    this.account = account
    this.balance = balance
}

Account.prototype.withdrawMoney = function (value) {
    if (this.balance < value) {
        console.log(`Insufficient funds: R$ ${this.balance.toFixed(2)}`)
        return
    }
    this.balance -= value
}
Account.prototype.cashDeposit = function (value) {
    this.balance += value
    this.lookBalance()
}
Account.prototype.lookBalance = function () {
    console.log(
        `Agency/Account: ${this.agency}/${
            this.account
        } | Balance: R$${this.balance.toFixed(2)} `
    )
}

function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance)
    this.limit = limit
}
CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount

CurrentAccount.prototype.withdrawMoney = function (value) {
    if (value > this.balance + this.limit) {
        console.log(`Insufficient funds: R$ ${this.balance.toFixed(2)}`)
        return
    }
    this.balance -= value
    this.lookBalance()
}
function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance)
}
SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

const currentAccount = new CurrentAccount(121, 1121542, 0, 100)
currentAccount.cashDeposit(10)
currentAccount.withdrawMoney(130)

const savingsAccount = new SavingsAccount(123, 1231234, 0)

savingsAccount.cashDeposit(10)
savingsAccount.withdrawMoney(130)
