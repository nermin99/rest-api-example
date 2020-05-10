const router = require('express').Router()

const { posts } = require('./v1')

router.use('/posts', posts)

router.get('/', (req, res) => {
  res.send('We are on home')
})

module.exports = router
