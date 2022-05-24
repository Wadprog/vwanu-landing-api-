const express = require('express')
const passport = require('passport')
const auth = require('../controller/auth')

const router = express.Router()

console.log(auth.login)
router
  .route('/')
  .post(
    passport.authenticate('local', { failureRedirect: '/login' }),
    auth.login
  )

router.get('/logout', auth.logout)
router.get('/lock-screen', auth.lockScreen)
router.get('/forgot-password', auth.forgotPasswordForm)

module.exports = router
