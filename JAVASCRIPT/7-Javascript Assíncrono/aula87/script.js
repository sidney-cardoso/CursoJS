// -------------------------------- MÉTODOS PARA PROMISES -------------------------------- //

const randomNumber = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
const wait = (message, time) => {
    return new Promise((resolve, reject) => {
        const error = new TypeError('BAD VALUE')
        if (typeof message !== 'string') reject(error)

        setTimeout(() => {
            resolve(message.toUpperCase() + ' - checked')
        }, time)
    })
}

// Promise.all()
const promisesArray = [
    wait('First promise', randomNumber(1, 5)),
    wait('Second promise', randomNumber(1, 5)),
    wait('Third promise', randomNumber(1, 5))
]

/* Promise.all(promisesArray)
    .then(response => console.log(response))
    .catch(error => console.error(error))
 */
// Promise.race()

Promise.race(promisesArray)
    .then(response => console.log(response))
    .catch(error => console.error(error))

// Promise.resolve()
const savePage = () => {
    const cache = false
    // if (cache) return Promise.resolve('Página está em cache')
    if (cache) return Promise.reject('Página está em cache')
    else return wait('Página salva em cache', 3000)
}
savePage()
    .then(response => console.log(response))
    .catch(error => console.error(error))
// Promise.reject()
