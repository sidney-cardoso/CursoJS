const HomeModel = require('../models/HomeModel')

/* HomeModel.create({
    title: 'Teste',
    description: 'Teste de descrição'
})
HomeModel.find()
    .then(data => console.log(data))
    .catch(err => console.error(err))
 */
exports.homePage = (req, res) => {
    res.render('index')
}

exports.sendForm = (req, res) => {
    res.send(req.body)
}
