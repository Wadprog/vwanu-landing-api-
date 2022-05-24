/* eslint-disable no-console */
const mongoose = require('mongoose')

const AppError = require('../errors')
const { catchAsync, tokenizeObject } = require('../helper')

const toObjectId = mongoose.Types.ObjectId

module.exports.login = catchAsync(async (req, res) => {
  const { isActive, isAdmin, _id, firstName, lastName, avatar } = req.user

  return tokenizeObject(
    {
      avatar,
      isActive,
      isAdmin,
      _id,
      firstName,
      lastName,
    },

    (err) => {
      throw new Error(err.message, 500)
    },
    (token) => res.json({ token })
  )
})

module.exports.forgotPasswordForm = (req, res) =>
  res.json({ msg: 'auth/forgot-password' })

module.exports.lockScreen = (req, res) => res.json({ msg: 'auth/lockScreen' })
module.exports.recoverPassword = (req, res) =>
  res.json({ msg: 'auth/recover-password' })
module.exports.register = (req, res) => res.json({ msg: 'auth/register' })

module.exports.register = (req, res) => res.json({ msg: 'auth/register' })

module.exports.logout = (req, res) => {
  res.cookie('name', 'cookie')
  return res.json({ msg: 'Logged Out ' })
}
module.exports.loginForm = (req, res) => {
  res.cookie('name', 'cookie')
  return res.json({ msg: 'Your Login form Baby' })
}
