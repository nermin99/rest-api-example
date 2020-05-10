require('dotenv').config()

const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECTION, options, () =>
  console.log('Connected to DB!')
)
