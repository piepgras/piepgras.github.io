import bank from "./bank.js";
import work from "./work.js";
import store from "./store.js";

const workButtonElement = document.getElementById("workButton")
const bankButtonElement = document.getElementById("bankButton")
const laptopsElement = document.getElementById("laptopsList");
const buyButtonElement = document.getElementById("buyButton")

let laptops = []

fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops))

const addLaptopsToMenu = (laptops) => {
    laptops.forEach(x => addLaptopToMenu(x));
}

const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
}

const getLaptops = () => {
    return laptops
}

const app = {
    getLaptops
}

export default app

//BANK HANDLERS:
loanButton.addEventListener("click", function(){
    bank.loanPrompt();
});

//WORK HANDLERS:
workButtonElement.addEventListener("click", function(){
    work.makeMoney();
});

bankButton.addEventListener("click", function(){
    work.depositToBank(work.getWorkBalance(), bank.getLoanStatus())
});

//STORE HANDLERS:
laptopsElement.addEventListener("change", function(){
    store.updateStore(this.value-1)
});

buyButtonElement.addEventListener("click", function(){
    store.buy();
});
