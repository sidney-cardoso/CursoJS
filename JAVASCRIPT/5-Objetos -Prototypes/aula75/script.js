// ----------------------------------- MANIPULANDO PROTOTYPES ----------------------------------- //

// new Object -> Object.prototype
const objectA = {
    keyA: 'A'
    // __proto__ = Object.prototype
}
const objectB = {
    keyB: 'B'
    // __proto__ = objectA
}
const objectC = new Object()
objectC.keyC = 'C'

Object.setPrototypeOf(objectB, objectA)
Object.setPrototypeOf(objectC, objectB)

console.log(objectB.keyA)
console.log(objectC.keyB)

function Product(name, price) {
    this.name = name
    this.price = price

    // this.discount = discount // Diminui a performance da aplicação
}
Product.prototype.discount = function (percentage) {
    this.price -= this.price * (percentage / 100)
}
Product.prototype.increase = function (percentage) {
    this.price += this.price * (percentage / 100)
}

const product1 = new Product('Laptop', 2999)
const product2 = new Product('SmartPhone', 2500)

const product3 = {
    name: 'Playstation',
    price: 4000
}
Object.setPrototypeOf(product3, Product.prototype)
product1.discount(100)
product2.increase(100)
product3.discount(80)

console.log(product1)
console.log(product2)
console.log(product3)


const product4 = Object.create(Product.prototype)
product4.price = 1000
product4.increase(100)

console.log(product4)

const product5 = Object.create(Product.prototype, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Xbox'
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 5000
    }
})
product5.discount(90)
console.log(product5)
