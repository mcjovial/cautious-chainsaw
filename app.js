const express = require('express')

const bookRoute = require('./routes/book.route')
const userRoute = require('./routes/user.route')

const app = express()

app.use(express.json())
app.use('/api/books', bookRoute)
app.use('/api/users', userRoute)


app.use(express.json())

module.exports = app