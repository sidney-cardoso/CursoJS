const fruits = ['banana', 'pineapple', 'mango']
const person = {
    name: 'Sidney',
    middlename: 'Cardoso',
    age: 17
}
/* 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
} */

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

// for in - faz a leitura de indices de um array ou chaves de um objeto
/* for (i in fruits) {
    console.log(fruits)
}
 */
for (let i in fruits) {
    console.log(fruits[i] + '\n')
}
for (let i in person) {
    console.log(i)
}
