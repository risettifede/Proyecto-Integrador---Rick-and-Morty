const http = require('http')
const data = require('./utils/data')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes('/rickandmorty/character')) {

        const id = parseInt(req.url.split('/').at(-1))
        const character = data.find((char) => char.id === +id) // Cuidado con find. Pq devuelve la primera coincidencia y corta ejecución. PARA ID, SÍ SIRVE.

        res.writeHead(200, { 'Control-type': 'application/json' })
        res.end(JSON.stringify(character))

    } else {
        res.writeHead(404, {'Content-type' : 'text/plain'})
        res.end("404 Not Found")
    }
}).listen(3001)