var path = require('path')
const cors = require('cors')
var logger = require('morgan')
var express = require('express')
const helmet = require('helmet')
const passport = require('passport')
const PassportLocal = require('passport-local')
var createError = require('http-errors')
const session = require('express-session')
var cookieParser = require('cookie-parser')
// custom dependencies
var usersRouter = require('./routes/users')
var emailRouter = require('./routes/email')
var authRouter = require('./routes/auth')
const connectDB = require('./model')
const User = require('./model/user')
const environnement = require('./config')
// custom dependencies

var app = express()

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public', 'out')))
// Getting the cookies
app.use(cookieParser(environnement.COOKIE_SECRET))
// Handling session
app.use(session({ ...environnement.SESSION_CONFIG }))
// setting up passport
app.use(passport.initialize())
app.use(passport.session())
passport.use(new PassportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// overriding post
// app.use(methodOverride('_method'))
// connecting to database

connectDB()

// app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/testers', emailRouter)
app.use('/login', authRouter)

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
