const number = Number(prompt('Digite um número'))
const numberTitle = document.getElementById('number-title')
const text = document.getElementById('text')

numberTitle.innerHTML = number

text.innerHTML = `
<p>Raiz quadrada de ${number}: <strong>${number ** 0.5}</strong></p>
<p>${number} é inteiro: <strong>${Number.isInteger(number)}</strong></p>
<p>É NaN: <strong>${Number.isNaN(number)}</strong></p>
<p>Arredondado para cima: <strong>${Math.ceil(number)}</strong></p>
<p>Arredondado para baixo: <strong>${Math.floor(number)}</strong></p>
<p>Seu número com 2 casas decimais: <strong>${number.toFixed(2)}</strong></p>
`
