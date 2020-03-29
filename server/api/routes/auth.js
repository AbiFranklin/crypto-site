const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/:SteamID', authController.auth_get_me)

module.exports = router
