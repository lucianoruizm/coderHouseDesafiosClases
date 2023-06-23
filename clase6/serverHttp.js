const http = require('http')

const server = http.createServer((request, response) => {
    console.log("Solicitud recibida", request.url)

    if (request.url === '/hello'){
        response.end("Hello World")
    } else {
        response.end("Hello Backend")
    }
})

server.listen(8080, () => {
    console.log("Servidor web escuchando en el puerto 8080")
})