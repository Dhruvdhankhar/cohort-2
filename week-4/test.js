const express = require("express")
const cors = require("cors");
const app = express()

app.use(cors());

app.get("/", function(req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b

    res.send(sum.toString());
})
app.listen(3009);