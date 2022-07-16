// devemos seguir as mesmas regras que utilizamos para criar variáveis ao nomear uma função

function soma(a, b) {
    return a + b // Quando o JavaScript encontrar a palavra return, ele interrompe a execução da função e retorna o valor da expressão
}
console.log(soma(2, 3))

// Função anónima
/*
const raiz = function (num) {
    return num ** 0.5
}

console.log(raiz(4))
console.log(raiz(2))
console.log(raiz(Math.PI))
 */

// Arrow Function
const raiz = num => num ** 0.5
console.log(raiz(4))
console.log(raiz(2))
console.log(raiz(Math.PI))