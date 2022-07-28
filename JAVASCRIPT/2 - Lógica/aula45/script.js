// ---------------------------------------- TRY, CATCH, FINALLY ---------------------------------------- //

const showMeHour = date => {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Não é uma instância de Date')
    }
    if (!date) {
        date = new Date()
    }
    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try {
    const date = new Date('16-05-2005 12:12:55')
    const hour = showMeHour()
    console.log(hour)
} catch (error) {
    console.log(error)
} finally {
    console.log('Finalizado')
}

/* 
try {
    // Executa quando não existem erros
    console.log('Abrindo o arquivo...')
    console.log('Erro no arquivo enquanto eu editava...')
    console.log('Fechando o arquivo...')
} catch (error) {
    // Executa quando existem erros
    console.log('Tratando o erro...')
} finally {
    // Executa sempre

    console.log('Sempre executa...')
}
 */
