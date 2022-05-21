var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')


var usersRouter = require('./routes/users')
var emailRouter = require('./routes/email')
const connectDB = require('./model')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public', 'out')))

// connecting to database
connectDB()

// app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/tester', emailRouter)

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'out', 'index.html'))
// })
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  const { status = 500, message = 'Something went wrong ' } = err
  return res.status(status).json({ message })
})

module.exports = app
