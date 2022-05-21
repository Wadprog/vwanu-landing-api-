const mongoose = require('mongoose')
const { send_mail } = require('../google')

console.log(typeof send_mail)
const TesterSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  authorized: { type: Boolean, default: true },
})

TesterSchema.post('save', function (doc) {
  console.log('Your tester was successfully saved')
  send_mail(doc.firstName, doc.email)
})

module.exports = mongoose.model('tester', TesterSchema)
