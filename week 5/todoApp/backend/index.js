const express = require("express")
const { createTodo , updateTodo} = require('./types')
const app = express()
app.listen(3000)
app.use(express.json())

app.post('/todo' , function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong input"
        })
        return;
    }
})

app.get('/todos' , function(req, res){
    
})


app.put('/completed' , function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Something's wrong"
        })
    }
})