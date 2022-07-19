// --------------------------------------- OPERAÇÃO TERNÁRIA --------------------------------------- //

const velocidade = 60

const radar =
    velocidade > 60
        ? 'Você estava acima do limite de velocidade, multa aplicada"'
        : 'Você estava abaixo do limite de velocidade, sem multa"'
console.log(radar)
