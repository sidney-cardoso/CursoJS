// ---------------------------------------------- ESCOPO LÉXICO ---------------------------------------------- //
const name = 'Mariana'

function sayName() {
    // const name = 'José'
    console.log(name)
}

function useSayName() {
    const name = 'Maria'
    sayName()
}

useSayName() // Mariana - A função lembra onde ela foi declarada e vai até os vizinhos para buscar a variável
