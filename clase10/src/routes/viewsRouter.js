const express = require('express')

const viewsRouter = express.Router()

viewsRouter.get('/', (req, res) => {
    res.render('index',{})
})

module.exports = viewsRouter