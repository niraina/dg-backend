const express = require('express')
const { getCategories, setCategorie, editCategorie, deleteCategorie } = require('../controllers/categorie.controller')

const router = express.Router()

router.get("/", getCategories)
router.post("/", setCategorie)
router.put('/:id', editCategorie)
router.delete('/:id', deleteCategorie)

module.exports = router