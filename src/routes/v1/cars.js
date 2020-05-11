const router = require('express').Router()

const { car } = require('../../api')

router.get('/', car.get)
router.get('/:id', car.getOne)

module.exports = router
