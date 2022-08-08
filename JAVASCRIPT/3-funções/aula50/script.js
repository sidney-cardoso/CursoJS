// ------------------------------------ PARÂMETROS DA FUNÇÃO ------------------------------------ //
// arguments - sustentação de argumentos enviados

// Não funciona em arrow function
function myFunction(a, b, c) {
    let result = 0
    for (let argument of arguments) {
        result += argument
    }
    console.log(result, a, b, c)
}
//         a  b  c
myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function sum(a, b = 2, c = 3) {
    // b = b || 0 // se não tiver valor, atribui um valor padrão
    console.log(a + b + c)
}

// sum(2, 3, 4)
// sum(2, undefined, 20) // pulando o valor de b e assumindo o valor padrão

function func({ name, middleName, age }) {
    console.log(name, middleName, age)
}
const person = {
    name: 'João',
    middleName: 'Silva',
    age: 20
}
// func(person)

function func2([name, middleName, age]) {
    console.log(name, middleName, age)
}

// func2(['João', 'Silva', 20])

function calculate(operator, accumulator, ...value) {
    for (let val of value) {
        switch (operator) {
            case '+':
                accumulator += val
                break
            case '-':
                accumulator -= val
                break
            case '*':
                accumulator *= val
                break
            case '/':
                accumulator /= val
                break
            default:
                console.log('Operador inválido')
                break
        }
    }
    console.log(accumulator)
}

// calculate('+', 0, [10, 20, 30])
calculate('*', 1, 20, 30, 40, 50)
