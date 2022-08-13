// -------------------------------- Funções Geradoras -------------------------------- //

function* geradora1() {
    yield 'Valor: 1'
    yield 'Valor: 2'
    yield 'Valor: 3'
}

const g1 = geradora1()
console.log(g1) // Object [Generator] {}
console.log(g1.next()) // { value: 'Valor: 1', done: false }
console.log(g1.next().value) // Valor: 2
console.log(g1.next().value) // Valor: 3

for (let value of g1) {
    console.log(value)
}

function* geradora2() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}
const g2 = geradora2()
console.log(g2.next().value) // 0
console.log(g2.next().value) // 1
console.log(g2.next().value) // 2
console.log(g2.next().value) // 3
console.log(g2.next().value) // 4
console.log(g2.next().value) // 5
console.log(g2.next().value) // 6
console.log(g2.next().value) // 7

function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()
for (const value of g4) {
    console.log(value)
}

function* geradora5() {
    yield () => {
        console.log('Executando...')
    }

    yield () => {
        console.log('Executando novamente...')
    }
}

const g5 = geradora5()
const func = g5.next().value
const func1 = g5.next().value
func()
func1()