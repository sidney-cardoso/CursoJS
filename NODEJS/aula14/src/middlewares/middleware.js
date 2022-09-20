/* module.exports = (req, res, next) => {
    if (req.body.client) {
        req.body.client = req.body.client.replace('Cardoso', '')
        console.log(`Valor enviado: ${req.body.client}`)
    }
    next()
} */
exports.myMiddleware = (req, res, next) => {
    if (req.body.client) {
        req.body.client = req.body.client.replace('Cardoso', '')
        console.log(`Valor enviado: ${req.body.client}`)
    }
    next()
}
exports.otherMiddleware = (re, res, next) => {
    console.log('Other Middleware')
    next()
}
