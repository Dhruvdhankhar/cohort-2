const fs = require("fs");
const express = require("express");
const path = require("path")
const app = express();
app.listen(3001)

app.get("/file/:fileText", function(req,res){
    const name = req.params.fileText
    fs.readFile(name, 'utf-8' , function(err , data){
        res.json({
            data
        })
    })
})