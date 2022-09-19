const express = require('express')
const app = express()

//         CRIAR   LER   ATUALIZAR  APAGAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// http://nomesite.com/ <- GET - pedido -> Entrega a página /(home)
// http://nomesite.com/sobre <- GET - pedido -> Entrega a página - rota -> /sobre
// http://nomesite.com/contato <- GET - pedido -> Entrega a página - rota -> /contato

app.listen(3000, () => console.log('Server is running on 3000'))

app.get('/', (require, response) => {
    response.send(`
        <form action="/" method="post">
            Nome: <input name="name" type="text" /> 
            <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulário enviado')
})

app.get('/sobre', (req, res) => {
    res.send('<h1>SOBRE</h1>')
})
// Parâmetros definidos por padrão do node
// require - requisição -> pedido
// responde - resposta
