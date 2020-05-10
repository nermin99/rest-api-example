require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors()) // allow Cross-Origin Resource Sharing
app.use(express.json())

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

app.get('/', (req, res) => {
  res.send('We are on home')
})

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// connect db
mongoose.connect(process.env.DB_CONNECTION, options, () =>
  console.log('connected to DB!')
)

app.listen(3000)
