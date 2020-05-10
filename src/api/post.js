const { Post } = require('../../db/models')

module.exports = {
  get: async (req, res, next) => {
    res.status(200).send(await Post.find())
    next()
  },
  getOne: async (req, res, next) => {
    try {
      res.status(200).send(await Post.findById(req.params.id))
      next()
    } catch (err) {
      next(err)
    }
  },
  create: async (req, res, next) => {
    try {
      const { title, description } = req.body

      const post = new Post({
        title,
        description
      })

      await post.save()

      res.status(201).send(post)
      next()
    } catch (err) {
      next(err)
    }
  },
  update: async (req, res, next) => {
    try {
      const updatedPost = await Post.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      )

      res.status(200).send(updatedPost)
      next()
    } catch (err) {
      next(err)
    }
  },
  delete: async (req, res, next) => {
    try {
      const removedPost = await Post.deleteOne({ _id: req.params.id })

      res.status(200).send(removedPost)
      next()
    } catch (err) {
      next(err)
    }
  }
}
