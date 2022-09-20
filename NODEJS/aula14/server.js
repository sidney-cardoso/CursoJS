require('dotenv').config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose
    .connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.emit('done')
    })
    .catch(error => console.error(error))

const path = require('path')
const routes = require('./routes')

const {
    myMiddleware,
    otherMiddleware
} = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(myMiddleware)
app.use(otherMiddleware)
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('done', () => {
    app.listen(3000, () => console.log('Server is running on 3000'))
})
