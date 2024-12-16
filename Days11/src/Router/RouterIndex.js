const express = require('express')
const router = express.Router()

const controllerIndex = require('../Controller/ControllerIndex')

router.get('/user', controllerIndex.indexGet)
router.post('/user', controllerIndex.indexPost)

module.exports = router