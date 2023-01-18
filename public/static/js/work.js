import bank from "./bank.js";

const workBalanceAmountElement = document.getElementById("workBalanceAmount")

let workBalance = 0;

const makeMoney = () => {
    workBalance += 100
    workBalanceAmountElement.innerText = workBalance;
}

const depositToBank = (amount, hasLoanStatus) => {
    if(hasLoanStatus){
        bank.payOffLoan(amount*0.1)
        bank.deposit(amount*0.9)
    } else {
        bank.deposit(amount)
    }

    workBalance = 0;
    workBalanceAmountElement.innerText = workBalance
}

const getWorkBalance = () => {
    return workBalance
}

export const work = {
    makeMoney, depositToBank, getWorkBalance
}

export default work;
