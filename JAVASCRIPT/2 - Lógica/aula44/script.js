// -------------------------------------- TRY, CATCH e THROW --------------------------------------//

const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos os valores devem ser números')
    }
    return a + b
}

try {
    console.log(sum(1, 2))
    console.log(sum(1, 'a'))
} catch (error) {
    console.log(error)
    console.log('Retornar um erro de forma mais amigável para o usuário')
}
