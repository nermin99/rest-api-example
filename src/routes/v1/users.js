const router = require('express').Router()

const { user } = require('../../api')

router.get('/', user.get)
router.get('/:id', user.getOne)
router.post('/', user.create)
router.patch('/:id', user.update)
router.delete('/:id', user.delete)

module.exports = router
