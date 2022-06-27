const express = require('express')
const { signinUser } = require('../controllers/user.controller')

const router = express.Router()

router.post('/', signinUser)

module.exports = router