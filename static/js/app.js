// app.js handles events, fetching and provides the laptops for store.js 

// Import modules statements
import bank from "./bank.js";
import work from "./work.js";
import store from "./store.js";

// Setup HTMLElements for workButton, bankButton, buyButton, laptopsList select
const workButtonElement = document.getElementById("workButton");
const bankButtonElement = document.getElementById("bankButton");
const laptopsElement = document.getElementById("laptopsList");
const buyButtonElement = document.getElementById("buyButton");

// Array for the API fetched laptops
let laptops = []

// Fetch from url, then if response make a json with that response,
// add data to it and add the laptops in that data to the select
fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops))

// For each laptop in laptops array add it to the select menu through addLaptopToMenu
const addLaptopsToMenu = (laptops) => {
    laptops.forEach(x => addLaptopToMenu(x));
}

// Appends the laptops to the laptopsElement select menu in ascending order 0'th -> n'th
const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
}

// Returns laptops array for use in updating store information when another select option is chosen
const getLaptops = () => {
    return laptops
}

// Functions avaiable in app module
const app = {
    getLaptops
}

// Export module
export default app

// BANK HANDLERS:
loanButton.addEventListener("click", function(){
    // Run loanPrompt() on click
    bank.loanPrompt();
});

// WORK HANDLERS:
workButtonElement.addEventListener("click", function(){
    // Run makeMoney() on click
    work.makeMoney();
});

bankButton.addEventListener("click", function(){
    // Run depositToBank($, hasALoanBoolean) on click
    work.depositToBank(work.getWorkBalance(), bank.getLoanStatus());
});

// STORE HANDLERS:
laptopsElement.addEventListener("change", function(){
    // Run updateStore() when select menu option is changed with its option value-1 since laptops[] is zerobased
    store.updateStore(this.value-1);
});

buyButtonElement.addEventListener("click", function(){
    // Run buy() on click
    store.buy();
});
