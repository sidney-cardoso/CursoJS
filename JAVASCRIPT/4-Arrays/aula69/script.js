// ------------------------------------ FOREACH ------------------------------------ //

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* 
for (let number of array) {
    console.log(number)
}
 */
let total = 0
array.forEach((value, index) => {
    total += value
})
console.log(total)
