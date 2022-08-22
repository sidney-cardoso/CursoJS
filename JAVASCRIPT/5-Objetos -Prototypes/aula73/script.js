// Métodos úteis para objetos

/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptors(o, 'props)
 * ... (spread operator)

JÁ VISTOS:
Object.keys (Retorna as chaves de um objeto)
Object.freeze (Congela um objeto)
Object.defineProperties (Define várias propriedades)
Object.defineProperty (Define uma propriedade)
*/

const product = { name: 'Shirt', price: 100, material: 'cotton' }
/* const pants = {
    ...product,
    material: 'jeans'
} */
// const pants = Object.assign({}, product, { material: 'jeans' })
const pants = { name: product.name, price: product.price }

pants.name = 'Pants'
pants.price = 200
Object.freeze(pants)
delete pants.name
console.log(pants)
console.log(product)

console.log(Object.keys(product)) // Retorna as chaves de um objeto
console.log(Object.values(product)) // Retorna os valores das chaves de um objeto
console.log(Object.entries(product)) // Retorna as chaves e valores de um objeto);
Object.defineProperty(product, 'name', {
    value: 'Shoes',
    writable: false,
    configurable: false
})
product.name = 'asdf'
delete product.name

console.log(Object.getOwnPropertyDescriptor(product, 'name')) //{ value: 'Shirt', writable: true, enumerable: true, configurable: true }
console.log(product)

for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`)
}
