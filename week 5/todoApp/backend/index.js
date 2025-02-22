const express = require("express")
const { createTodo , updateTodo} = require('./types')
const { todo } = require('./db')
const app = express()
app.listen(3000)
app.use(express.json())

app.post('/todo' , async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
    // put it in mongo
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos' , async function(req, res){
    const todos = await todo.find({})
})


app.put('/completed' , async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Something's wrong"
        })
    }
    const updateTodos = await todo.update({
        _id: req.body.id },
        {completed: true
    })
    res.json({
        msg: "Marked Completed"
    })
})