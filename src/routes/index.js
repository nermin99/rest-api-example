const router = require('express').Router()

const apiV1 = require('./v1')

router.get('/', (req, res) => {
  const endpoints = { user_url: '/users/{user}', car_url: '/cars/{car}' }
  res.json(endpoints)
})

router.use('/api/v1/', apiV1)

module.exports = router
