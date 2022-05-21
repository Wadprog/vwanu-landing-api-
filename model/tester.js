const mongoose = require('mongoose')
const { send_mail } = require('../google')

console.log(typeof send_mail)
const TesterSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  authorized: { type: Boolean, default: true },
  emailSent: { type: Boolean, default: false },
  emailSentDate: { type: Date, required: false },
  emailFailReason: { type: String, require: false },
})

TesterSchema.post('save', async function (doc) {
  console.log('Your tester was successfully saved')

  try {
    await send_mail(doc.firstName, doc.email)
    await this.update({ emailSent: true, emailSentDate: Date.now() })
  } catch (err) {
    await send_mail(doc.firstName, doc.email)
    await this.update({
      emailFailReason:
        err?.message || err?.toString() || 'Unknown error sending email',
    })
  }
})

module.exports = mongoose.model('tester', TesterSchema)
