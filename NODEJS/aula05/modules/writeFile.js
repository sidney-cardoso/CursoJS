const fs = require('fs').promises

module.exports = (directory, data) => {
    // flag: w - apaga o conteúdo existente e reescreve
    fs.writeFile(directory, data)
}
//
//
//
//
const path = require('path')
const directory2 = path.resolve(__dirname, 'file.txt')
const description = 'Criando arquivos com a ferramenta NODEJS\n'
// a - adiciona o conteúdo ao lado do já existente
fs.writeFile(directory2, description, { flag: 'a' })
