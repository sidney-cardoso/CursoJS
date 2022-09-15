class ValidateForm {
    constructor() {
        this.form = document.querySelector('form')
        this.events()
    }
    events() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const validFields = this.isValid()
        const validPasswords = this.isPasswordValid()
        if (validFields && validPasswords) {
            alert('Formulário enviado')
            this.form.submit()
        }
    }
    isPasswordValid() {
        let valid = true
        const password = this.form.querySelector('.password')
        const repeatPassword = this.form.querySelector('.repeat-password')

        if (password.value !== repeatPassword.value) {
            valid = false
            this.createError(password, 'As senhas não coincidem!')
            this.createError(repeatPassword, 'As senhas não coincidem!')
        }
        if (password.value.length < 6 || password.value.length > 12) {
            valid = false
            this.createError(
                password,
                'A senha deve ter entre 6 e 12 caracteres'
            )
        }
        return valid
    }

    isValid() {
        let valid = true
        for (let errorText of this.form.querySelectorAll('.error-message')) {
            errorText.remove()
        }
        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText
            if (!field.value) {
                this.createError(
                    field,
                    `Campo "${label}" não pode estar vazio!`
                )
                valid = false
            }
            if (field.classList.contains('cpf')) {
                if (!this.validateCPF(field)) valid = false
            }
            if (field.classList.contains('user')) {
                if (!this.validateUser(field)) valid = false
            }
        }
        return valid
    }
    validateUser(field) {
        const user = field.value

        let valid = true
        if (user.length > 12 || user.length < 3) {
            this.createError(
                field,
                'Usuário precisa ter entre 3 e 12 caracteres!'
            )
            valid = false
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(
                field,
                'Usuário precisa conter apenas letras e/ou números!'
            )
            valid = false
        }

        return valid
    }
    validateCPF(field) {
        const cpf = new ValidateCPF(field.value)

        if (!cpf.validate()) {
            this.createError(field, `CPF INVÁLIDO`)
            return false
        }
        return true
    }

    createError(field, message) {
        const div = document.createElement('div')
        div.innerHTML = message
        div.classList.add('error-message')
        field.insertAdjacentElement('afterend', div)
    }
}

const validate = new ValidateForm()
