const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)

const generateNumber = () => String.fromCharCode(randomNumber(48, 58, 123))
const generateUpper = () => String.fromCharCode(randomNumber(65, 91))
const generateLower = () => String.fromCharCode(randomNumber(97, 123))
const symbols = '/|,.;^~\\[]{}!@#$%&*()_+=-'
const generateSymbols = () => symbols[randomNumber(0, symbols.length)]

export default (quantity, upper, lower, numbers, symbols) => {
    const arrayPassword = []

    quantity = Number(quantity)
    for (let i = 0; i < quantity; i++) {
        upper && arrayPassword.push(generateUpper())
        lower && arrayPassword.push(generateLower())
        numbers && arrayPassword.push(generateNumber())
        symbols && arrayPassword.push(generateSymbols())
    }
    return arrayPassword.join('').slice(0, quantity)
}
