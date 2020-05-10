const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: String,
  hp: Number
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
