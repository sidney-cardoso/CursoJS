exports.homePage = (require, response) => {
    response.render('index')
}

exports.sendForm = (req, res) => {
    res.send('Formulário enviado')
}
