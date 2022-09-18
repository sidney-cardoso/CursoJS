const fs = require('fs').promises
const path = require('path')

const readdir = async rootDir => {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walkFunctions(files, rootDir)
}

const walkFunctions = async (files, rootDir) => {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if (/\.git/g.test(fileFullPath)) continue

        if (/node_modules/g.test(fileFullPath)) continue

        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }

        if (!/\.scss$/g.test(fileFullPath) && !/\.css$/g.test(fileFullPath))
            continue

        console.log(fileFullPath, stats.isDirectory())
    }
}
 
readdir('/home/sidney/Área de Trabalho/JS_e_TS/JAVASCRIPT')
