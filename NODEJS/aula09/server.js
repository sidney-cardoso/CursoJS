const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => console.log('Server is running on 3000'))
