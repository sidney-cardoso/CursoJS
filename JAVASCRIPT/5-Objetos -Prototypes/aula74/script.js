// --------------------------------------------- PROTOTYPE --------------------------------------------- //
// Construtora -> molde (classe)
function Person(name, lastName) {
    this.name = name
    this.lastName = lastName
    // this.fullName = () =>`Este sobrescreve o de baixo: ${this.name} ${this.lastName}`
}
Person.prototype.fullName = () => `${this.name} ${this.lastName}`

// Instância
const person = new Person('Sidney', 'Silva') // <- Pessoa = Função construtora
const date = new Date() // <- Date = Função construtora
console.dir(person)
console.dir(date)
console.log(Person.prototype)

console.log(Person.prototype.fullName)

console.log(Person.prototype === person.__proto__)
