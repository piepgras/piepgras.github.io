// Setup HTMLElements for loanedBalanceAmount and bankBalanceAmount
const loanedBalanceAmountElement = document.getElementById("loanedBalanceAmount");
const bankBalanceAmountElement = document.getElementById("bankBalanceAmount");

// Fields for tracking current owed amount, current bank balance and if a loan is currently active
let hasLoan = false;
let loanBalance = 0;
let bankBalance = 0;

//Deposit to increase bank balance 
const deposit = (amount) => {
    bankBalance = Number(bankBalance) + amount;
    bankBalanceAmountElement.innerText = bankBalance;
}

const payOffLoan = (amount) => {
    if(amount <= loanBalance){
        loanBalance = Number(loanBalance) - amount
    } else {
        amount = Number(amount) - loanBalance
        loanBalance = 0
        bankBalance += amount
        invertLoanStatus()
    }
    bankBalanceAmountElement.innerText = bankBalance
    loanedBalanceAmountElement.innerText = loanBalance
}

//Withdraw from balance
const withdraw = (amount) => {
    if(amount <= bankBalance){
        bankBalance -= amount;
    }

    bankBalanceAmountElement.innerText = bankBalance
}

const loanPrompt = () => {
    let amount = Number(prompt("Whatchu want?"))

    if(amount <= (bankBalance * 2) && !hasLoan){
        bank.deposit(amount)
        bank.invertLoanStatus()
        loanBalance += amount
        loanedBalanceAmountElement.innerText = loanBalance
    }
}

//Get current bank balance
const getBalance = () => {
    return bankBalance;
}

const getLoanBalance = () => {
    return loanBalance;
}

//Invert the status of loan
const invertLoanStatus = () => {
    hasLoan = !hasLoan
}

//Get has loan bool
const getLoanStatus = () => {
    return hasLoan
}

const bank = {
    deposit, withdraw, loanPrompt, getBalance, getLoanBalance, payOffLoan, invertLoanStatus, getLoanStatus
}

export default bank
