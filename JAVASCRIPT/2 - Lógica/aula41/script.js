// ---------------------------------------------- EXERCÍCIOS DE LÓGICA ----------------------------------------------  //

// Escreva uma função que recebe 2 números e retorna o maior deles.

const bigger = (number1, number2) => {
    if (number1 === number2) return `Os números são iguais`

    return number1 > number2
        ? `O número ${number1} é maior`
        : `O número ${number2} é maior`
}

let number = bigger(10, 11)
console.log(number)
