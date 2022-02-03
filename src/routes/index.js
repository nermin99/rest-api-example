const router = require('express').Router()

const apiV1 = require('./v1')

const routes = apiV1.stack.map((layer) => {
  const [method] = Object.keys(layer.route.methods)
  return `${method.toUpperCase()} ${layer.route.path}`
})

router.get('/api/v1/', (req, res) => res.json(routes))

router.use('/api/v1/', apiV1)

module.exports = router
