const express = require('express')
const router = express.Router()
const controller = require('../controllers/products')

router.get('/', controller.getAll)

router.post('/', controller.postOne)

router.patch('/:id', controller.editOne)

router.delete('/:id', controller.deleteOne)

router.get('/:id', controller.getOne)

module.exports = router