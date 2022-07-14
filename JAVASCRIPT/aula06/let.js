// ---------------------------------------- LET ----------------------------------------

let nome // Declarando a variável
nome = 'João' // Atribuindo um valor à variável

console.log(nome, 'nasceu em 1984')
console.log('Em 2000,', nome, 'conheceu Maria')
console.log(nome, 'casou-se com Maria em 2012')
console.log('Maria teve 1 filho com', nome, 'em 2015')
console.log('O filho de', nome, 'se chama Eduardo')

// Não podemos redeclarar a variável
// let nome
// Será retornado o seguinte erro: SyntaxError: Identifier 'nome' has already been declared

// Mas podemos reatribuir um valor à ela:
nome = 'Marcos'

// REGRAS PARA CRIAR VARIÁVEIS COM LET

// Não podemos criar variáveis com palavras reservadas: let let, let function, let if, let const, etc...
// Variáveis precisam ter nomes significativos para que não fique confuso: let nameCustomer
// Variáveis não podem começar com  números: let 1nome, let 0person
// Nomes de variáveis não podem conter espaços ou traços: let name-client, let name person, etc... É recomendado utilizarmos a notação camelCase: let nameCustomer, personAge
// Case-sensitive: let agePerson é diferente de ageperson
// NÃO UTILIZAMOS VAR E SIM LET QUANDO O VALOR FOR VARIAR
