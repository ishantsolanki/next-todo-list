const mongoose = require('mongoose')
var faker = require('faker')

const todosSchema = new mongoose.Schema({
  title: String,
  checklist: [{ content: String, checked: Boolean }],
})

const Todo = new mongoose.model('Todo', todosSchema)

const createNewTodo = (req, res) => {
  new Todo({
    title: `${faker.hacker.verb()} ${faker.hacker.noun()}`,
  }).save((err, result) => {
    if (err) {
      res.sendStatus(400)
      return false
    }
    res.json(result)
  })
}

const fetchTodos = (req, res) => {
  Todo.find((err, result) => {
    if (err) {
      res.sendStatus(400)
      return false
    }

    return res.json(result)
  })
}

const updateTitle = (req, res) => {
  const { _id, title } = req.body

  Todo.findOneAndUpdate({ _id }, { title }).then(() => {
    Todo.findOne({ _id }, (err, result) => {
      if (err) {
        res.sendStatus(400)
        return false
      }

      return res.json(result)
    })
  })
}

module.exports = {
  createNewTodo,
  fetchTodos,
  updateTitle,
}
