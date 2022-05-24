const AppError = require('../errors')
const Tester = require('../model/tester')
const { catchAsync } = require('../utils/catchAsync.utils')
const { send_mail } = require('../google')

module.exports.createOne = catchAsync(async (req, res, next) => {
  let tester = await Tester.findOne({ email: req.body.email })
  if (tester)
    throw new AppError('Thank you very much we already have your email', 401)

  tester = new Tester(req.body)
  await tester.save()
  return res.json(tester)
})

module.exports.getAll = catchAsync(async (req, res, next) => {
  let testers = await Tester.find({})
  if (!testers) throw new AppError('Error finding tester ', 401)

  return res.json(testers)
})

module.exports.getOne = catchAsync(async (req, res, next) => {
  let tester = await Tester.findById(req.params.id)
  if (!tester) throw new AppError('Tester not found', 404)

  return res.json(tester)
})

module.exports.sendEmail = catchAsync(async (req, res, next) => {
  const { email, firstName } = req.body
  try {
    await send_mail(firstName, email)
    const tester = await Tester.findOneAndUpdate(
      { email },
      { emailSent: true, emailSentDate: Date.now() },
      { new: true }
    )
    console.log(tester)
    return res.json(tester)
  } catch (err) {
    console.error(err)
    throw new Error(error)
  }
})
