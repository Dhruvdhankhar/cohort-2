const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://dhruvdhkh:ERF6oiw4ArZypWHe@cluster0.l3wfjib.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos' , todoSchema)

module.exports = {
    todo: todo
}
//mongodb+srv://dhruvdhkh:ERF6oiw4ArZypWHe@cluster0.l3wfjib.mongodb.net/todos