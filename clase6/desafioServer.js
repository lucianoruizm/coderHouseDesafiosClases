const express = require('express')

const app = express()

app.get('/bienvenida', (req, res) => {
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color: blue">HELLO WORLD</h1>
    </body>
    </html>
    `
    return res.send(template)
})

app.get('/usuario', (req, res) => {
    const user = {
        nombre: "Michael",
        apellido: "Wayne",
        edad: 48,
        correro: "micwayne@mwmail.com"
    }
    return res.send(user)
})

app.get('/saludo/:name/:lastname', (req, res) => {
    console.log(req.params)
    return res.send(`Hola ${req.params.name} ${req.params.lastname}`)
})


app.listen(8080, () => {
    console.log("Servidor Express escuchando en el puerto 8080")
})