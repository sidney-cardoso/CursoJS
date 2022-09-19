exports.homePage = (require, response) => {
    response.send(`
        <form action="/" method="post">
            Nome: <input name="name" type="text" /> 
            <button>Enviar</button>
        </form>
    `)
}

exports.sendForm = (req, res) => {
    res.send('Formulário enviado')
}
