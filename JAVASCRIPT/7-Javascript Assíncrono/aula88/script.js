// ---------------------------------- async/await ---------------------------------- //

const randomNumber = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
const rand = randomNumber(1, 5)
const wait = (message, time) => {
    return new Promise((resolve, reject) => {
        const error = new TypeError('BAD VALUE')
        setTimeout(() => {
            if (typeof message !== 'string') reject(error)
            resolve(message + ' - checked')
            return
        }, time)
    })
}
/* 
wait('MENSAGEM 1', rand)
    .then(response => {
        console.log(response)
        return wait('MENSAGEM 2', rand)
    })
    .then(response => {
        console.log(response)
        return wait('MENSAGEM 3', rand)
    })
    .then(response => console.log(response))
    .catch(error => console.error(error))
 */
async function asyncFunction() {
    try {
        const message1 = await wait('MENSAGEM 1', rand)
        console.log(message1)

        const message2 = await wait('MENSAGEM 2', rand)
        // const message2 = await wait(1234, rand)
        console.log(message2)

        const message3 = await wait('MENSAGEM 3', rand)
        console.log(message3)

        console.log('Fases terminadas')
    } catch (error) {
        console.error(error)
    }
}
asyncFunction()
