const { Car } = require('../models')
const data = require('./cars.json')

module.exports = () => Car.insertMany(data)

module.exports = {
  seed: () => Car.insertMany(data),
  purge: () => Car.deleteMany({}),
}
