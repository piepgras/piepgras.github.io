const loanedBalanceAmountElement = document.getElementById("loanedBalanceAmount")
const bankBalanceAmountElement = document.getElementById("bankBalanceAmount")

let hasLoan = false;
let loanBalance = 0;
let bankBalance = 0;


//Deposit to balance
const deposit = (amount) => {
    bankBalance = parseInt(bankBalance)+amount
    bankBalanceAmountElement.innerText = bankBalance
}

const payOffLoan = (amount) => {
    if(amount <= loanBalance){
        loanBalance = parseInt(loanBalance) - amount
    } else {
        amount = parseInt(amount) - loanBalance
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

const createLoan = () => {

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
