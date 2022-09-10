function ValidateCPF(sentCPF) {
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: () => sentCPF.replace(/\D+/g, '')
    })
}
ValidateCPF.prototype.validate = function () {
    if (typeof this.cleanCPF === 'undefined') return false
    if (this.cleanCPF.length !== 11) return false
    if (this.sequence()) return false
    const partialCPF = this.cleanCPF.slice(0, -2)
    const digit1 = this.createDigit(partialCPF)
    const digit2 = this.createDigit(partialCPF + digit1)

    const newCPF = partialCPF + digit1 + digit2

    return newCPF === this.cleanCPF
}
ValidateCPF.prototype.createDigit = function (partialCPF) {
    const arrayCPF = Array.from(partialCPF)
    let regressive = arrayCPF.length + 1

    let total = arrayCPF.reduce((acc, value) => {
        acc += regressive * Number(value)
        regressive--
        return acc
    }, 0)
    const digit = 11 - (total % 11)
    return digit > 9 ? '0' : String(digit)
}
ValidateCPF.prototype.sequence = function () {
    const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length)
    return sequence === this.cleanCPF
}
const cpf = new ValidateCPF('705.484.450-52')
// const cpf = new ValidateCPF('070.987.720-03')
console.log(cpf.validate())
