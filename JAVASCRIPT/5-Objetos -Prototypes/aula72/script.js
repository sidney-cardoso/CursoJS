// ---------------------------------- defineProperty -> GETTERS E SETTERS ---------------------------------- //

function Product(name, price, stock) {
    this.name = name
    this.price = price

    let privateStock = stock
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        // value: stock,
        // writable: true
        get: () => stock, // Pegando o valor do stock
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('O stock deve ser um número')
            }
            privateStock = value
        }
    })
}

const laptop = new Product('Laptop', 2999.99, 1)
// console.log(laptop) // Product { name: 'Laptop', price: 2999.99, stock: [Getter] }
laptop.stock = 10 // O valor do stock foi alterado para 3
console.log(laptop.stock) // 1

function createProduct(name) {
    return {
        get name() {
            return name
        },
        set name(value) {
            name = value
        }
    }
}

const product2 = createProduct('Laptop')
console.log(product2) // { name: [Getter/Setter] }
console.log(product2.name) // Laptop
