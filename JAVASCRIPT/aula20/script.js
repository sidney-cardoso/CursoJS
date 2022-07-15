const scope = () => {
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')

    const people = []
    const receiveEvent = event => {
        event.preventDefault() // Prevenir o padrão que é enviar o formulário

        const name = form.querySelector('.name')
        const lastName = form.querySelector('.lastName')
        const height = form.querySelector('.height')
        const weight = form.querySelector('.weight')

        people.push({
            name: name.value,
            lastName: lastName.value,
            height: height.value,
            weight: weight.value
        })
        console.log(people)
        result.innerHTML += `<p>${name.value} ${lastName.value} ${height.value} ${weight.value}</p>`
    }
    // Adiciona um "ouvidor" de eventos
    form.addEventListener('submit', receiveEvent)
}

scope()
