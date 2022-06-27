const express = require('express')
const { signinUser, signupUser } = require('../controllers/user.controller')

const router = express.Router()

router.post('/', signinUser)
router.post('/users', signupUser)

module.exports = router