// -------------------------------------- Object.defineProperty() -------------------------------------- //
// -------------------------------------- Object.defineProperties() -------------------------------------- //

function Product(name, price, stock) {
    // this.name = name
    // this.price = price
    // this.stock = stock
    Object.defineProperties(this, {
        name: {
            value: name,
            writable: true,
            enumerable: true,
            configurable: true
        },
        price: {
            value: price,
            writable: true,
            enumerable: true,
            configurable: true
        }
    })
    Object.defineProperty(this, 'stock', {
        enumerable: true, // Será exibido
        value: stock, // Valor
        writable: false, // Não pode ser alterado
        configurable: false // A propriedade stock não será reconfigurada e nem deletada
    })
    /* Object.defineProperty(this, 'stock', {
        enumerable: true, // Será exibido
        value: stock, // Valor
        writable: true, // Pode ser alterado
        configurable: true // A propriedade stock será reconfigurada
    }) */
}

const laptop = new Product('Laptop', 2999.99, 1)
laptop.stock = 2 // Não irá mudar o valor

console.log(laptop)
console.log(Object.keys(laptop)) // Se enumerable for false, a propriedade stock não será exibida

for (const key in laptop) {
    console.log(key)
}
