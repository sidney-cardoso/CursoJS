// ----------------------------------------- CLOSURES ----------------------------------------- //

function returnFunction() {
    const message = 'Hello World'
    return function () {
        return message
    }
}

const func = returnFunction()
console.dir(func)

