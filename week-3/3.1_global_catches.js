// Global catches--> help you give the user a better error message
const express = require("express")
const app = express();
app.listen(3000);
app.use(express.json());

app.post("/", function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.json("You have " + kidneyLength + " kidneys");
})

// global catches

app.use(function(err , req , res , next){  // 4 input parameter, always at the last of code unline express.json()
    //errCount++;  to keep track of error, server is hitting
    console.error(err);   // log the error for debugging
    res.json({
        msg: "sorry something is up with our server"
    })
})