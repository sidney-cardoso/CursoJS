exports.myMiddleware = (req, res, next) => {
    res.locals.localVariable = 'Teste'
    next()
}

exports.otherMiddleware = (req, res, next) => {
    next()
}
