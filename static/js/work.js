// Import modules statement
import bank from "./bank.js";

// Setup HTMLElement for work balance amount
const workBalanceAmountElement = document.getElementById("workBalanceAmount")

// Field for a dollarz made by hard work
let workBalance = 0;

// Increments balance by 100 for every click
const makeMoney = () => {
    workBalance += 100
    workBalanceAmountElement.innerText = workBalance;
}

// Deposits money to the bank with two different approaches
// depending on if there is an outstanding loan or not
const depositToBank = (amount, hasLoanStatus) => {
    if(hasLoanStatus){
        // If a loan is outstanding add 1/10th to pay off loan, rest goes to balance
        // I Realize that it would be more correct to physically reduce the amount accordingly
        // and add remainder to where it belongs
        bank.payOffLoan(amount*0.1)
        bank.deposit(amount*0.9)
    } else {
        bank.deposit(amount)
    }

    // After sending the money on, set work balance to 0
    workBalance = 0;
    workBalanceAmountElement.innerText = workBalance
}

// Get balance
const getWorkBalance = () => {
    return workBalance
}

// Functions visible in module
export const work = {
    makeMoney, depositToBank, getWorkBalance
}

export default work;
