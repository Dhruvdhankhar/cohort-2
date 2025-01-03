// Middlewares --> some checks which is required in real world, eg- auth, and input validations, etc
const express = require("express")
const app = express();
app.listen(3000);
app.use(express.json()); // built-in middleware to parse json bodies

function userAuth(req ,res, next){   
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "dhruv" || password != "pass"){
            res.status(400).json("Invalid user")        
    }
    else {
        next();
    }

}

function kidneyAuth(req ,res, next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2){   //This is very hard to scale What if you expect a complicated input? , This is where zod comes into the picture
            res.status(400).json("Invalid Input")        
    }
    else {
        next();
    }
}


app.get("/", userAuth , kidneyAuth , function(req,res){
    res.json("everything is fine")
})


// when middlewares are not present, same logic/code repeats
// app.get("/", function(req,res){

//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username == "dhruv" && password == "pass") {
//         if (kidneyId == 1 || kidneyId == 2) {
//             res.json("everything is fine");
//         } else {
//             res.status(400).json("Invalid Input: Invalid kidneyId");
//         }
//     } else {
//         res.status(400).json("Invalid Input: Invalid username or password");
//     }
// })