const mongoose = require('mongoose')

const TesterSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  authorized: { type: Boolean, default: true },
})

module.exports = mongoose.model('tester', TesterSchema)
