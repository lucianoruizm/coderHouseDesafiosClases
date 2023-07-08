const express = require('express')
const handlebars = require('express-handlebars')
const viewsRouter = require('./routes/viewsRouter')
const socketIO = require('socket.io');

const app = express()
const httpServer = app.listen(8080, ()=>console.log("Listening on PORT 8080"))

const socketServer = socketIO(httpServer)

app.engine('handlebars', handlebars.engine())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use('/', viewsRouter)

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado")
})