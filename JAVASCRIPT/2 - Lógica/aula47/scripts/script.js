function timer() {
    const getTimeFromSeconds = seconds => {
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    const clock = document.querySelector('.clock')
    const start = document.querySelector('.start')
    const stop = document.querySelector('.stop')
    const clean = document.querySelector('.clean')
    let seconds = 0
    let timer

    const startTimer = () => {
        timer = setInterval(() => {
            seconds++
            clock.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', event => {
        const element = event.target

        if (element.classList.contains('clean')) {
            clearInterval(timer)
            clock.innerHTML = '00:00:00'
            seconds = 0
            clock.classList.remove('stopped')
        }
        if (element.classList.contains('start')) {
            clock.classList.remove('stopped')
            clearInterval(timer)
            startTimer()
        }
        if (element.classList.contains('stop')) {
            clearInterval(timer)
            clock.classList.add('stopped')
        }
    })
}
timer()
