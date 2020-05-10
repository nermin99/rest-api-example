const router = require('express').Router()

const { post } = require('../../api')

router.get('/', post.get)
router.get('/:id', post.getOne)
router.post('/', post.create)
router.patch('/:id', post.update)
router.delete('/:id', post.delete)

module.exports = router
