/* const h1 = document.querySelector('.container h1')
const date = new Date()
const zeroLeft = number => (number < 10 ? `0${number}` : number)

const getWeekDay = day => {
    switch (day) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        default:
            return 'Data inválida'
    }
}
const getMonth = month => {
    switch (month) {
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
    }
}
const createDate = date => {
    const weekDay = date.getDay()
    const month = date.getMonth()

    const day = getWeekDay(weekDay)
    const monthName = getMonth(month)

    return `${day}, ${date.getDate()} de ${monthName} de ${date.getFullYear()} - ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`
}

h1.innerHTML = createDate(date)
 */

/* const h1 = document.querySelector('.container h1')
const date = new Date()
const options = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = date.toLocaleDateString('pt-BR', options)
 */

const h1 = document.querySelector('.container h1')
const date = new Date()
const zeroLeft = number => (number < 10 ? `0${number}` : number)

const getWeekDay = day => {
    const weekDay = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    return weekDay[day]
}
const getMonth = month => {
    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    return months[month]
}

const createDate = date => {
    const weekDay = date.getDay()
    const month = date.getMonth()

    const day = getWeekDay(weekDay)
    const monthName = getMonth(month)

    return `${day}, ${date.getDate()} de ${monthName} de ${date.getFullYear()} - ${zeroLeft(
        date.getHours()
    )}:${zeroLeft(date.getMinutes())}`
}

h1.innerHTML = createDate(date)
