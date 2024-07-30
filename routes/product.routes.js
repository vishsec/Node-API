const express = require('express')
const { getProducts, createProduct, getByIdProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

const router = express.Router()

router.get('/',getProducts )
router.post('/', createProduct)
router.get('/:id', getByIdProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router