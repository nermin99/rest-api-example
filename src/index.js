const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { error } = require('./middleware')

const app = express()

app.set('json spaces', 2)

app.use(express.json())
app.use(cors()) // allow Cross-Origin Resource Sharing
app.use(routes)
app.use(error)

module.exports = app
