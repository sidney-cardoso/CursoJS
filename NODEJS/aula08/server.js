const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
// Tipos de parâmetros - url
//                  url              queryStrings
// https://socialmedia/profiles/12345?campanha=googleads&nomecampanha=nome

app.listen(3000, () => console.log('Server is running on 3000'))
app.get('/', (require, response) => {
    response.send(`
        <form action="/" method="post">
            Nome: <input name="name" type="text" /> 
            <button>Enviar</button>
        </form>
    `)
})

// Colocando parâmetros
// http://localhost:3000/tests/123 - { idUser: '123' }
// Sem a ?, o parâmetro seria obrigatório e a página tests não carregaria
app.get('/tests/:idUser?/:optional?', (req, res) => {
    // http://localhost:3000/tests?nome=sidney&sobrenome=cardoso - query strings
    console.log(req.params)
    console.log(req.query) // { nome: 'sidney', sobrenome: 'cardoso' }
    // res.send(req.params.idUser)
    // res.send(req.params)
    res.send(req.query.nome)
})

// body params
app.post('/', (req, res) => {
    console.log(req.body) // Será executado assim que o formulário for enviado
    res.send(`valor enviado: ${req.body.name}`)
})

app.get('/sobre', (req, res) => {
    res.send('<h1>SOBRE</h1>')
})
