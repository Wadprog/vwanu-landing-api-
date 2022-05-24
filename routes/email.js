const express = require('express')
const emailController = require('../controller/email.controller')

const router = express.Router()
/* GET users listing. */

router.route('/').post(emailController.createOne).get(emailController.getAll)
router
  .route('/:id')
  .get(emailController.getOne)
  .patch(emailController.sendEmail)

module.exports = router
