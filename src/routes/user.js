var express = require('express')
var router = express.Router()
const user = require('../api/user')

router.post('/register', user.register)
router.post('/transfer', user.transfer)

module.exports = router
