// ----------------------------------- ATRIBUIÇÃO VIA DESESTRUTURAÇÃO ( OBJECTS ) ----------------------------------- //

const person = {
    name: 'John',
    middleName: 'Doe',
    age: 20,
    address: {
        street: 'Rua dos Bobos',
        number: 123
    }
}
// Notação de pontos
// const name = person.name

// Desestruturação de objetos
// Está extraindo de dentro do objeto pessoa, o nome dela

const { name = '', middleName, age } = person // Atribuindo valores padrão ao nome caso ele não exista

console.log(name, middleName, age)

const {
    address: { street, number }
} = person // Desestruturando o objeto address

console.log(street, number)

const { name: nome, ...rest } = person // name mudada para nome para não conflitar com a variável name
console.log(nome, rest)
