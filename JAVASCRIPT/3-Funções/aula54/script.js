// ---------------------------------------------- CALLBACK FUNCTIONS ---------------------------------------------- //

const randomNumber = (min = 1000, max = 3000) => Math.floor(Math.random() * (max - min) + min)

function func1(callback) {
    setTimeout(() => {
        console.log('func1')
        if (callback) callback()
    }, randomNumber())
}

function func2(callback) {
    setTimeout(() => {
        console.log('func2')
        if (callback) callback()
    }, randomNumber())
}

function func3(callback) {
    setTimeout(() => {
        console.log('func3')
        if (callback) callback()
    }, randomNumber())
}

func1(f1Callback)

function f1Callback() {
    func2(f2Callback)
}

function f2Callback() {
    func3(f3Callback)
}

function f3Callback() {
    console.log('fim')
}
