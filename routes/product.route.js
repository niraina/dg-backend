const express = require('express')
const { getProduct, setProduct, editProduct, deleteProduct } = require('../controllers/product.controller')

const router = express.Router()

router.get("/", getProduct)
router.post("/", setProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

module.exports = router