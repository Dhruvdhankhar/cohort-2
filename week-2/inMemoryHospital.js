const express = require("express");
const app = express();
app.listen(3002);

let users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}];

// request method:
// 1.GET => User can check how many kidneys they have and their health 
// 2.POST => User can add a new kidney
// 3.PUT => User can replace a kidney, make it healthy
// 4.DELETE => User can remove a kidney


app.get("/", (req,res) =>{
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i = 0; i < numberOfKidneys; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    let noOfUnhealthyKidney = numberOfKidneys - noOfHealthyKidneys;
    res.send({
        numberOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidney
    })
})

app.post("/", (req,res) =>{
    
})

app.put("/", (req,res) =>{
    
})

app.delete("/", (req,res) =>{
    
})

