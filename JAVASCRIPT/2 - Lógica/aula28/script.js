// ----------------------------- DATE --------------------------------- //
/* 
const moreThreeHours = 60 * 60 * 3 * 1000
const oneDay = 60 * 60 * 24 * 1000
const date = new Date(0 + moreThreeHours + oneDay) // 01/01/1970 TimeSTamp Unix
 */

// const date = new Date(2022, 6, 18, 20, 58, 56, 999) // 0 - Janeiro - 11 - Dezembro

const zeroLeft = number => (number < 10 ? `0${number}` : number)

const formatDate = date => {
    const day = zeroLeft(date.getDate())
    const month = zeroLeft(date.getMonth() + 1)
    const year = zeroLeft(date.getFullYear())
    const hour = zeroLeft(date.getHours())
    const minutes = zeroLeft(date.getMinutes())
    const seconds = zeroLeft(date.getSeconds())

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

const date = new Date(Date.now())
const brazilDate = formatDate(date)
console.log(brazilDate)
