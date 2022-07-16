// Escapando caracteres de uma string

let string = "Uma \"String\""
console.log(string)

// Colocando uma barra invertida
let string1 = "Uma \\string"
console.log(string1)

// Buscando um carácter em uma posição especifica
// console.log(string[2])
console.log(string.charAt(6))


// Concatenando strings
console.log(string.concat(" em um código JS"))

// Buscando o indice que a palavra String começa
console.log(string.indexOf('String'))

// Fatiando uma string
console.log(string.slice(-7, -1));


// Substituindo caracteres
console.log(string.replace(/Uma "String"/, "Uma outra string"));

// Dividindo um array
let string2 = "O rato roeu a roupa do rei de roma."
console.log(string2.split(' ', 2))

// Convertendo toda a string para letras maiúsculas 
console.log(string2.toUpperCase());
