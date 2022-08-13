const createCalculator = () => {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonClick()
            this.pressEnter()
        },
        equal() {
            let result = this.display.value
            try {
                result = eval(result)
                if(result === 0 ) {
                    this.display.value = '0'
                    return
                }
                if (!result) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(result)
            } catch (e) {
                alert('Conta inválida')
                return
            }
        },
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.equal()
                }
            })
        },
        clearDisplay() {
            this.display.value = ''
        },
        deleteLastDigit() {
            this.display.value = this.display.value.slice(0, -1)
        },

        buttonClick() {
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains('button-num')) {
                    this.buttonToDisplay(el.innerText)
                }
                if (el.classList.contains('button-clear')) {
                    this.clearDisplay()
                }
                if (el.classList.contains('button-del')) {
                    this.deleteLastDigit()
                }
                if (el.classList.contains('button-eq')) {
                    this.equal()
                }
            })
        },
        buttonToDisplay(value) {
            this.display.value += value
        this.display.focus()

        }
    }
}

const calculator = createCalculator()

calculator.start()
