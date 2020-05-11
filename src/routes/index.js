const router = require('express').Router()

const { users, cars } = require('./v1')

router.use('/users', users)
router.use('/cars', cars)

router.get('/', (req, res) => {
  const endpoints = { user_url: '/users/{user}', car_url: '/cars/{car}' }
  res.json(endpoints)
})

module.exports = router
