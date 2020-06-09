const mongoose = require('mongoose')

const setupExpress = require('./server/express')

const connectionString =
  'mongodb+srv://ishant:passwrd@cluster-todo-cpww9.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})

mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:'),
)

mongoose.connection.once('open', () => {
  console.log('Connected to database')
  setupExpress()
})
