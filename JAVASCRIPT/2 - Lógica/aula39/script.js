// ------------------------------------ WHILE / DO - WHILE ------------------------------------ //

/* let i = 0

while (i <= 10) {
    console.log(i)
    i++
}
 */

const randomNumber = (min, max) => {
    const r = Math.random() * (max - min) * min
    return Math.floor(r)
}

const min = 1
const max = 50
// let random = randomNumber(min, max)

let random = 10
while (random !== 10) {
    random = randomNumber(min, max)
    console.log(random)
}

do {
    random = randomNumber(min, max)
    console.log(random)
} while (random !== 10)
