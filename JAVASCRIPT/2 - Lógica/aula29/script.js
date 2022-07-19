// --------------------------------------- SWITCH/CASE --------------------------------------- //

const weekDay = day => {
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
const date = new Date()
const day = date.getDay()
const getWeekDay = weekDay(day)

console.log(`${day} - ${getWeekDay}`)
