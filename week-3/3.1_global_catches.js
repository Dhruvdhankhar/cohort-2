// global catches --> if anyhow, server throw error then that must not be shown to public, therefore GC comes into play to provide clean error to user (eg. 404 500 )
const express = require("express")
const app = express();
app.listen(3000);
app.use(express.json());

app.post("/", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.json("You have " + kidneyLength + " kidneys");
})

