const express = require('express')

// Custom dependencies
const user = require('../controller/user')

const router = express.Router()

router.route('/').post(user.createOne).get(user.getAll)
router.route('/:id').get(user.getOne).put(user.editOne)

module.exports = router
