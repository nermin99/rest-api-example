const { User } = require('../../db/models')

module.exports = {
  get: async (req, res, next) => {
    res.status(200).send(await User.find())
    next()
  },
  getOne: async (req, res, next) => {
    try {
      res.status(200).send(await User.findById(req.params.id))
      next()
    } catch (err) {
      next(err)
    }
  },
  create: async (req, res, next) => {
    try {
      const user = new User(req.body)

      await user.save()

      res.status(201).send(user)
      next()
    } catch (err) {
      next(err)
    }
  },
  update: async (req, res, next) => {
    try {
      const updatedUser = await User.updateOne({ _id: req.params.id }, { $set: req.body })

      res.status(200).send(updatedUser)
      next()
    } catch (err) {
      next(err)
    }
  },
  delete: async (req, res, next) => {
    try {
      const removedUser = await User.deleteOne({ _id: req.params.id })

      res.status(200).send(removedUser)
      next()
    } catch (err) {
      next(err)
    }
  },
}
