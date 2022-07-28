// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem.
// Retorna true se a imagem for paisagem

const ePaisagem = (largura, altura) => largura > altura ? 'A imagem é paisagem' : 'A imagem não é paisagem'


let paisagem = ePaisagem(250, 100)
console.log(paisagem)
