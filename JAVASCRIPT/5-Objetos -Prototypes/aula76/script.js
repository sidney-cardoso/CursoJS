// ------------------------------------- HERANÇA ------------------------------------- //

function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.increase = function (amount) {
    this.price += amount
}
Product.prototype.discount = function (amount) {
    this.price -= amount
}

function Shirt(name, price, color) {
    Product.call(this, name, price) // Shirt herda tudo o que Product tem e também tem suas propriedades especificas
    this.color = color
}
Shirt.prototype = Object.create(Product.prototype)
Shirt.prototype.constructor = Shirt // Shirt { name: 'T-shirt', price: 25.5 }

Shirt.prototype.increase = function (percent) {
    this.price = this.price + this.price * (percent / 100)
}
function Cup(name, price, material, amount) {
    Product.call(this, name, price)
    this.material = material

    Object.defineProperty(this, 'amount', {
        enumerable: true,
        configurable: false,
        get: () => amount,
        set: value => {
            if (typeof value !== 'number') return
            amount = value
        }
    })
}

Cup.prototype = Object.create(Product.prototype)
Cup.prototype.constructor = Cup

const product = new Product('Notebook', 1000)
const shirt = new Shirt('T-shirt', 10, 'black')
const cup = new Cup('Mug', 10, 'glass', 10)

shirt.increase(10)

console.log(shirt) // Product { name: 'T-shirt', price: 25.5 }
console.log(product)
console.log(cup)
