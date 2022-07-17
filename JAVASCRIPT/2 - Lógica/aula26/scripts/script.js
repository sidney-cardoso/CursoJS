const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputWeight = event.target.querySelector('#weight')
    const inputHeight = event.target.querySelector('#height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if (!weight) {
        setResult('peso inválido', false)
        return
    }
    if (!height) {
        setResult('altura inválida', false)
        return
    }
    const imc = getIMC(weight, height)
    const imcValue = getValueIMC(imc)

    setResult(`IMC: ${imc} - (${imcValue})`, true)
})
const getValueIMC = imc => {
    const value = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau I',
        'Obesidade grau II',
        'Obesidade grau III'
    ]
    if (imc > 39.9) return value[5]

    if (imc > 34.9) return value[4]

    if (imc > 29.9) return value[3]

    if (imc > 24.9) return value[2]

    if (imc > 18.4) return value[1]

    if (imc < 18.5) return value[0]
}

const getIMC = (weight, height) => {
    const imc = (weight / (height * height)).toFixed(1)
    return imc
}

const createParagraph = () => {
    const p = document.createElement('p')
    return p
}

const setResult = (msg, isValid) => {
    const resultado = document.querySelector('#result')
    resultado.innerHTML = ''
    const p = createParagraph()

    if (isValid) {
        p.classList.add('result-paragraph-valid')
    } else {
        p.classList.add('result-paragraph-invalid')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}
