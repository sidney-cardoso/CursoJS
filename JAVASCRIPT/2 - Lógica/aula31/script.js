// ------------------------------------- VAR, LET, CONST ------------------------------------- //
const True = true

/* 
let name = 'Maria' // Criando
var name2 = 'João' // Criando
*/
// let tem Escopo de bloco
// var tem somente o escopo de função
/* 
if (True) {
    let name = 'Mariana' // Criando
    var name2 = "Sílvio" // Redeclarando
    console.log(name, name2)
    if (True) {
        let name = 'John Doe'
        console.log(name)
    }
}
 */

/* var middleName = 'Ribeiro'
function sayHello() {
    console.log(middleName)
    var name = 'John Doe'
    if (True) {
        console.log(middleName)
    }
    console.log(name)
}

// console.log(name) // var tem escopo somente de função, então este erro será apresentado: name is not defined
sayHello()
 */

// ------------------------------------- HOISTING ------------------------------------- //
console.log(name) // undefined
console.log(name2) // Cannot access 'name2' before initialization
let name2 = 'João'
var name = 'John Doe'
