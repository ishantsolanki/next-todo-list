const mongoose = require('mongoose')
var faker = require('faker')

const checklistSchema = new mongoose.Schema({
  content: String,
  checked: Boolean,
})

const todosSchema = new mongoose.Schema({
  title: String,
  checklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Checklist' }],
})

const Todo = new mongoose.model('Todo', todosSchema)
const Checklist = new mongoose.model('Checklist', checklistSchema)

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
  Todo.find()
    .populate('checklist')
    .exec((err, result) => {
      if (err) {
        res.sendStatus(400)
        return false
      }

      return res.json(result)
    })
}

const fetchTodo = (req, res) => {
  const { todoId } = req.params
  Todo.findById(todoId)
    .populate('checklist')
    .exec((err, result) => {
      if (err) {
        res.sendStatus(400)
        return false
      }

      return res.json(result)
    })
}

const updateTitle = (req, res) => {
  const { _id, title } = req.body

  Todo.findByIdAndUpdate(_id, { title }).then(() => {
    Todo.findOne({ _id }, (err, result) => {
      if (err) {
        res.sendStatus(400)
        return false
      }

      return res.json(result)
    })
  })
}

const addNewChecklist = (req, res) => {
  const { todoId } = req.params

  Todo.findById(todoId, (err, todo) => {
    if (err) {
      res.sendStatus(400)
      return false
    }
    new Checklist({ content: '', checked: false }).save((err, result) => {
      if (err) {
        res.sendStatus(400)
        return false
      }

      if (result) {
        todo.checklist.push(result._id)
        todo.save()
        return res.json(todo)
      }
    })
  })
}

const updateChecklistContent = (req, res) => {
  const { _id, content } = req.body

  Checklist.findByIdAndUpdate(_id, { content }, (err, checklist) => {
    if (err) {
      res.sendStatus(400)
      return false
    }
    return res.json(checklist)
  })
}

module.exports = {
  createNewTodo,
  fetchTodos,
  fetchTodo,
  updateTitle,
  addNewChecklist,
  updateChecklistContent,
}
