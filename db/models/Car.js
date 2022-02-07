const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  miles_per_Gallon: Number,
  cylinders: Number,
  displacement: Number,
  horsepower: Number,
  weight_in_lbs: Number,
  acceleration: Number,
  year: String,
  origin: String,
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car
