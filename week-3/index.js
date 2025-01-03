const express = require("express")
const app = express();
app.listen(3001);
app.use(express.json());


app.post("/", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.json("You have " + kidneyLength + " kidneys");
})