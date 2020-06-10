const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const todos = require('./todos')

const app = express()

const setupExpress = () => {
  const PORT = process.env.PORT || process.env.REACT_APP_API_PORT
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(express.static(path.join(__dirname, '../build')))
  app.use(cors())
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../build/index.html')),
  )

  app.get('/createNewTodo', todos.createNewTodo)
  app.get('/fetchTodos', todos.fetchTodos)
  app.post('/updateTitle', todos.updateTitle)
}

module.exports = setupExpress
