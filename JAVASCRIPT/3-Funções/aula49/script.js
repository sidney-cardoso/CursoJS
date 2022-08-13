// Declaração de função (Function Hoisting)

sayMyName()
function sayMyName() {
    let name = 'Sidney'
    console.log(name)
}

// First-Class objects (Objetos de primeira classe)
// Function expression

const sayHello = function () {
    console.log('Hello')
}

function executeFunction(func) {
    func()
}
executeFunction(sayHello)

// Arrow function
const arrow = () => {
    console.log('Hello')
}
arrow()

// Função em um objeto

const object = {
    /* sayHello: function () {
        console.log('Hello')
    } */
    sayHello() {
    }
}
object.sayHello()
