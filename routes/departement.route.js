const express = require('express')
const { getDepartements, setDepartement, editDepartement, deleteDepartement } = require('../controllers/departement.controller')

const router = express.Router()

router.get("/", getDepartements)
router.post("/", setDepartement)
router.put('/:id', editDepartement)
router.delete('/:id', deleteDepartement)

module.exports = router