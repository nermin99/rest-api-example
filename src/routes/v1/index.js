const router = require('express').Router()

const { car, user } = require('../../api')

router.get('/cars', car.get)
router.get('/cars/:id', car.getOne)

router.get('/users', user.get)
router.get('/users/:id', user.getOne)
router.post('/users', user.create)
router.patch('/users/:id', user.update)
router.delete('/users/:id', user.delete)

module.exports = router
