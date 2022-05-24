var mongoose = require('mongoose')
const gravatar = require('gravatar')
const merge = require('lodash/merge')

// Custom dependencies
const User = require('../model/user')
const UserError = require('../errors/messages/user')
const SystemError = require('../errors/SystemErrors')
const { catchAsync, savePopulate } = require('../helper')

module.exports.createOne = catchAsync(async (req, res) => {
  let user = await User.findOne({ username: req.body.username })
  if (user) throw new SystemError(UserError.USERNAME_ALREADY_EXISTS)
  const avatarOptions = { s: '200', r: 'x', d: 'retro', f: 'y' }
  req.body.avatar = gravatar.url(req.body.email, avatarOptions)
  user = await User.register(req.body, req.body.password)
  return res.json(user)
})

module.exports.getAll = catchAsync(async (req, res) => {
  const users = await User.find({})
  if (!users) throw new SystemError(UserError.NO_USERS_FOUND)
  return res.json(users)
})

module.exports.getOne = catchAsync(async (req, res) => {
  const user = await User.findOneById(req.params.id)
  if (!user) throw new SystemError(UserError.NO_USER_FOUND)
  return res.json(user)
})

module.exports.editOne = catchAsync(async (req, res) => {
  let user = await User.findById(req.params.id)
  if (!user) throw new SystemError(UserError.NO_USER_FOUND)
  user = merge(user, req.body.user)
  await user.save()
})
