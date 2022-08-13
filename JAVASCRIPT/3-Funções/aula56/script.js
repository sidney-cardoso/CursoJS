// ------------------------------------------------ FACTORY FUNCTIONS ------------------------------------------------ //
// Quando uma função está dentro de um objeto, ela é chamada de método.
function createPerson(name, middleName, weight, height) {
    return {
        name,
        middleName,
        // Getter
        get fullName() {
            return `My name is ${this.name} ${this.middleName}. My weight is ${this.weight} kg and my height is ${this.height} m. My BMI is ${this.BMI}`
        },
        // Setter
        set fullName(value) {
            value = value.split(' ')
            this.name = value.shift()
            this.middleName = value.join(' ')
        },

        weight,
        height,
        // Getter
        get BMI() {
            return (this.weight / this.height ** 2).toFixed(2)
        }
    }
}

const person = createPerson('João', 'Santos', 118, 1.8)

console.log(person.fullName)
person.fullName = 'Sidney Cardoso'
console.log(person.fullName)

