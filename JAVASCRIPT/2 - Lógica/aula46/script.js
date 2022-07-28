// -------------------------------------- setTimeout e setInterval -------------------------------------- //

const showHour = () => {
    let date = new Date()
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

const timer = setInterval(() => {
    console.log(showHour())
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 4000)

setTimeout(() => {
    console.log('Fim do intervalo')
}, 5000)
