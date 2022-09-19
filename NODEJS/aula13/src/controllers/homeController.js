exports.homePage = (req, res) => {
    res.render('index')
    // console.log(`"HomePage" - Usuário: ${req.session.clientName}`)
}

exports.sendForm = (req, res) => {
    res.send(req.body)
}
