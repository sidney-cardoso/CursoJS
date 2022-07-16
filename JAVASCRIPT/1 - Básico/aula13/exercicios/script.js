let name = prompt('Digite seu nome completo:')
document.body.innerHTML += `Seu nome é: ${name}<br />`
document.body.innerHTML += `Seu nome tem letras: ${name.length}<br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${name.charAt(1)}<br />`
document.body.innerHTML += `Qual o primeiro indice da letra S do seu nome? ${name.indexOf('S')}<br />`
document.body.innerHTML += `Qual o ultimo indice da letra S do seu nome seu nome? ${name.lastIndexOf('S')}<br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${name.slice(-3)}<br />`
document.body.innerHTML += `As palavras do seu nome são ${name.split(' ')}<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()}<br />`
document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()}<br />`

// Sidney Cardoso Rodrigues da Silva
