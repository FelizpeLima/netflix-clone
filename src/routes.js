const express = require('express')

const routes = express.Router()

const IndexController = require('./app/controllers/IndexController')

routes.get('/index', IndexController.create)

module.exports = routes
