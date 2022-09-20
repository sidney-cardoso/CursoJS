const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

/* const myMiddleware = (req, res, next) => {
    req.session = { clientName: 'Sidney', surname: 'Cardoso' }
    console.log('\nMiddleware\n')
    next()
}
 */
// Rotas da home page
/* 
route.get('/', myMiddleware, homeController.homePage, (req, res, next) => {
    console.log('\nExecutando depois de exibir a resposta')
    console.log(`"LastMiddleware" - Usuário: ${req.session.clientName}`)
}) */
route.get('/', homeController.homePage)
route.post('/', homeController.sendForm)

// Contato
route.get('/contact', contactController.showContact)

module.exports = route
