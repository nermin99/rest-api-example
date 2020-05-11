const router = require('express').Router()

const { users, cars } = require('./v1')

router.use('/users', users)
router.use('/cars', cars)

router.get('/', (req, res) => {
  res.send('We are on home')
})

module.exports = router
