const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

// Rotas da home page

route.get('/', homeController.homePage)
route.post('/', homeController.sendForm)

// Contato
route.get('/contact', contactController.showContact)

module.exports = route
