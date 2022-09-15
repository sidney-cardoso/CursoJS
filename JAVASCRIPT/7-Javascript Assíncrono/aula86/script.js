// ----------------------------- PROMISES ----------------------------- //
const randomNumber = (min, max) => {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

const wait = (message, time) => {
    return new Promise((resolve, reject) => {
        const error = new TypeError('Bad Value')
        if (typeof message !== 'string') reject(error)
        setTimeout(() => {
            resolve(message)
        }, time)
    })
}

const rand = randomNumber(1, 5)
wait('Conexão com a API', rand)
    .then(response => {
        console.log(response)
        return wait('Buscando dados da API', rand)
        // return wait(1234, rand)
    })
    .then(response => {
        console.log(response)
        return wait('Lendo os dados da API', rand)
    })
    .then(response => console.log(response))
    .then(() => console.log('Exibindo os dados'))
    .catch(error => console.error(error))
