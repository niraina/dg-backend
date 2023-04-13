const express = require('express')
const { getTypes, setType, editType, deleteType } = require('../controllers/type.controller')

const router = express.Router()

router.get("/", getTypes)
router.post("/", setType)
router.put('/:id', editType)
router.delete('/:id', deleteType)

module.exports = router