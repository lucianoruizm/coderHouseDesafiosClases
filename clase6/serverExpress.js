const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Home')
})

app.get('/Proveedores', (req, res) => {
    return res.send('Proveedores')
})

app.get('/contacto', (req, res) => {
    return res.send('Contact')
})

app.listen(8080, () => {
    console.log("Servidor Express escuchando en el puerto 8080")
})