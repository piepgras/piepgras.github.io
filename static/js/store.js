// Import modules statements
import app from "./app.js"
import bank from "./bank.js"

// Setup HTMLElements for the store
const laptopSpecsElement = document.getElementById("laptopSpecs")
const laptopDescriptionElement = document.getElementById("laptopDescription")
const laptopPriceElement = document.getElementById("laptopPrice")
const warningElement = document.getElementById("warning")
const laptopImageElement = document.getElementById("laptopImage")
const laptopNameElement = document.getElementById("laptopName")

// Updates the HTMLElements with data from laptops[] from app.js
const updateStore = (index) => {
    laptopSpecsElement.innerText = app.getLaptops()[index].specs
    laptopDescriptionElement.innerText = app.getLaptops()[index].description
    laptopPriceElement.innerText = app.getLaptops()[index].price
    laptopNameElement.innerText = app.getLaptops()[index].title

    // Updates image source with static URL + specific image location and name
    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + app.getLaptops()[index].image
    // Picture 5 is not handled. I would handle it by asking for a fixed API or by manually handling the 
    // case where index = 4 and either hardcoding a URL or editing the URL string's from .png to .jpg
}

// Buys a laptop if the price is less than or equal to bank balance and updates a label according to success or failure
const buy = () => {
    let price = Number(laptopPriceElement.innerText)
    if(price <= bank.getBalance()){
        bank.withdraw(price)
        warningElement.innerText = "Laptop bought!"
    } else {
        warningElement.innerText = "You're broke, work harder peasant!"
    }
}

// Functions visible in module
const store = {
    updateStore, buy
}

export default store

