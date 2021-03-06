// Dependencies.
const jwt = require('jsonwebtoken')
const fs = require('fs')
const rfs = require('rotating-file-stream')
const path = require('path')
const config = require('../config')

const helper = {}

helper.savePopulate = (model, requiredFields, res) => {
  return model.save().then((details) => {
    details.populate(requiredFields).execPopulate()
    return res.json(details)
  })
}
helper.accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log'),
})

helper.configDetails = null
helper.catchAsync = (fn) =>
  function (req, res, next) {
    fn(req, res, next).catch((err) => next(err))
  }

helper.capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

helper.tokenizeObject = (payload, cbError, cbSuccess) => {
  console.log('in there')
  const tokenDetails = { user: payload }
  jwt.sign(
    tokenDetails,
    config.JWT_SECRET,
    {
      expiresIn: 360000,
    },
    (err, token) => {
      if (err) {
        console.log(err)
        return cbError(err)
      }
      return cbSuccess(token)
    }
  )
}
module.exports = helper
