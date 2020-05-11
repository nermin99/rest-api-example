const { User } = require('../models')
const data = require('./users.json')

module.exports = () => User.insertMany(data)

module.exports = {
  seed: () => User.insertMany(data),
  purge: () => User.deleteMany({})
}
