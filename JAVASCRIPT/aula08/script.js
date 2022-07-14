const name = 'Sidney'
const lastName = 'Silva'
const age = 17
const weight = 96.2
const height = 1.85
let imc
let anoNascimento
imc = weight / (height * height)
anoNascimento = new Date().getFullYear() - age

console.log(
    `${name} ${lastName} nascido em ${anoNascimento}, tem ${age} anos, tem ${height}m de altura, pesa ${weight}kg e tem o Indice de massa corporal de ${imc.toFixed(2)}`
)
