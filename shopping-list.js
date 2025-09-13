let shoppingList = []

let firstProduct = {
    item: "tomates",
    quantity: 3,
    purchased: false
}

shoppingList.push(firstProduct)

let secondProduct = {
    item: "patatas",
    quantity: 5,
    purchased: false
}

shoppingList.push(secondProduct)

let thirdProduct = {
    item: "uvas",
    quantity: 23,
    purchased: false
}

shoppingList.push(thirdProduct)

let fourthProduct = {
    item: "repollo",
    quantity: 23,
    purchased: false
}

shoppingList.push(fourthProduct)

let newList = []

function addItem (list/* shoppingList */, newItem, newQuantity) {
    let newProduct = {
        item: newItem, //item: "Coca-cola"
        quantity: newQuantity, //quantity: 4
        purchased: false
    }

    list.push(newProduct) //shoppingList.push(newPrduct)
    return list 
}

shoppingList = addItem(shoppingList, "sandia", 3)  //A shoppingList le asigno el resultado de ejecutar addItem

console.table(shoppingList)

console.table(newList)