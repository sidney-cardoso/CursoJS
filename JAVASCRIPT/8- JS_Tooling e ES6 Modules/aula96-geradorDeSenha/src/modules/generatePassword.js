import generatePassword from './generators'

const showPassword = document.querySelector('.show-password')
const quantity = document.querySelector('.quantity')
const upper = document.querySelector('.chk-uppercase')
const lower = document.querySelector('.chk-lowercase')
const numbers = document.querySelector('.chk-numbers')
const symbols = document.querySelector('.chk-symbols')
const buttonGenerator = document.querySelector('.generate-password')

export default () => {
    buttonGenerator.addEventListener('click', e => {
        e.preventDefault()
        showPassword.innerHTML = generate()
    })
}

const generate = () => {
    const password = generatePassword(
        quantity.value,
        upper.checked,
        lower.checked,
        numbers.checked,
        symbols.checked
    )
    if (quantity.value < 4 || quantity.value > 20) {
        return 'Selecione um valor entre 4 e 20'
    }
    if (!password) {
        return 'Nenhuma opção foi selecionada'
    }
    return password
}
