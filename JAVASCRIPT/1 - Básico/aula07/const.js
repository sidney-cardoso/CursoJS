// ---------------------------------------- CONST ----------------------------------------

// Não podemos criar Constantes com palavras reservadas: const const, const function, const if, const const, etc...
// Constantes precisam ter nomes significativos para que não fique confuso: const nameCustomer
// Constantes não podem começar com  números: const 1nome, const 0person
// Nomes de Constantes não podem conter espaços ou traços: const name-client, const name person, etc... É recomendado utilizarmos a notação camelCase: const nameCustomer, personAge
// Case-sensitive: const agePerson é diferente de ageperson
// NÃO UTILIZAMOS VAR E SIM const QUANDO O NÃO PODER SER ALTERADO
// Não podemos modificar o valor de uma constante

/* const name = "Sidney"
name = "Mario"
 */
// Não podemos declara uma constante sem inicializar ela
/* 
const name 
name = "Sidney" */

const name = 'Sidney'
console.log(name)

// ATRIBUINDO O VALOR DE UMA CONSTANTE À OUTRA CONSTANTE

const number1 = '17'
const number2 = 20

const result = number1 + number2
const double = result * 2

let tripleResult = result * 3
tripleResult = tripleResult + 10
console.log(result)

console.log(typeof result)
