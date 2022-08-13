function Calculator() {
    this.display = document.querySelector('.display')
    this.start = () => {
        this.getClicks()
        this.getEnter()
    }
    this.getEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) this.equal()
        })
    }
    this.getClicks = () => {
        document.addEventListener('click', event => {
            const element = event.target
            if (element.classList.contains('button-num')) this.addNumberToDisplay(element)
            if (element.classList.contains('button-clear')) this.clear()
            if (element.classList.contains('button-del')) this.deleteLastDigit()
            if (element.classList.contains('button-eq')) this.equal()
        })
    }
    this.equal = () => {
        try {
            const result = eval(this.display.value)
            if(result === 0 ) {
                this.display.value = '0'
                return
            }
            if (!result) {
                alert('Operação inválida')
                return
            }
            this.display.value = result
        } catch (error) {
            this.display.value = 'Error'
            return
        }
    }
    this.addNumberToDisplay = el => {
        this.display.value += el.innerText
        this.display.focus()
    }
    this.deleteLastDigit = () => this.display.value = this.display.value.slice(0, -1)
    this.clear = () => (this.display.value = '')
}
const calc = new Calculator()
calc.start()
