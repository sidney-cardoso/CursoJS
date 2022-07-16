const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputWeight = event.target.querySelector('#weight')
    const inputHeight = event.target.querySelector('#height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if(!peso) {

    }
})

const createParagraph = () => {
    const p = document.createElement('p')
    return p
}

const setResult = msg => {
    const resultado = document.querySelector('#result')
    resultado.innerHTML = ''
    const p = createParagraph()
}
