const express = require("express");
const app = express();
app.listen(3002);
app.use(express.json());


const users = [{
    name: 'John',
    kidneys: [{
        healthy: true
    },{
        healthy: false
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
    res.json({
        numberOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidney
    })
})

// for get req. --> req.query (query parameter is valid)
// for post req. --> req.body (body parameter is used)


app.post("/", (req,res) =>{  
    const isHealthy = req.body.isHealthy;  // cannot parse the body and read isHealthy, therefore to parse a json body on the server
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done!"
    });
});

app.put("/", (req,res) =>{
    for(let i = 0; i < users[0].kidneys.length; i++){  // can call from global varibables only
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Surgury success"
    })
})

app.delete("/", (req,res) =>{
    const newKidney = []
    for(let i = 0; i< users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({
        msg: "Unhealthy Kidney Removed"
    })
})

