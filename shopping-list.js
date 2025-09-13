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


function addItem (list/* shoppingList */, newItem, newQuantity) {
    let newProduct = {
        item: newItem, //item: "Coca-cola"
        quantity: newQuantity, //quantity: 4
        purchased: false
    }

    list.push(newProduct) //shoppingList.push(newPrduct)
    return list 
}

shoppingList = addItem(shoppingList, "sandia", 3) //A shoppingList le asigno el resultado de ejecutar addItem

console.table(shoppingList)


function removeItem(list, index) { //Necesitamos la lista y la posicion del producto.
    list.splice(index, 1) //En este caso, solo necesitamos borrar un producto, por eso el segundo parámetro siempre será 1.
    return list
}

shoppingList = removeItem(shoppingList, 3)

console.table(shoppingList)

function updateItem(list, index, newItem, newQuantity) {
    let updatedProduct = list[index]; 
        updatedProduct.item = newItem;
        updatedProduct.quantity = newQuantity;
        return list;
    }

shoppingList = updateItem(shoppingList, 1, "cebolla", 6)

console.table(shoppingList)