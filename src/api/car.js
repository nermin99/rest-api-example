const { Car } = require('../../db/models')

module.exports = {
  get: async (req, res, next) => {
    res.status(200).send(await Car.find())
    next()
  },
  getOne: async (req, res, next) => {
    try {
      res.status(200).send(await Car.findById(req.params.id))
      next()
    } catch (err) {
      next(err)
    }
  }
}
