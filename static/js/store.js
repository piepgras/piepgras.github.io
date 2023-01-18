import app from "./app.js"
import bank from "./bank.js"

const laptopSpecsElement = document.getElementById("laptopSpecs")
const laptopDescriptionElement = document.getElementById("laptopDescription")
const laptopPriceElement = document.getElementById("laptopPrice")
const warningElement = document.getElementById("warning")
const laptopImageElement = document.getElementById("laptopImage")
const laptopNameElement = document.getElementById("laptopName")

const updateStore = (index) => {
    laptopSpecsElement.innerText = app.getLaptops()[index].specs
    laptopDescriptionElement.innerText = app.getLaptops()[index].description
    laptopPriceElement.innerText = app.getLaptops()[index].price
    laptopNameElement.innerText = app.getLaptops()[index].title

    laptopImageElement.src = "https://hickory-quilled-actress.glitch.me/" + app.getLaptops()[index].image
    
    
    
}

const buy = () => {
    let price = Number(laptopPriceElement.innerText)
    if(price <= bank.getBalance()){

        bank.withdraw(price)
        warningElement.innerText = "Laptop bought!"
    } else {

        warningElement.innerText = "You're broke, work harder peasant!"
    }
}

const store = {
    updateStore, buy
}

export default store

