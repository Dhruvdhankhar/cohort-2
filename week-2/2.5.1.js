const express = require("express");
const app = express();

function calculateSum(a,b){
    const ans = a + b;
    return ans;
}

app.get('/', (req,res)=>{
    const a = parseInt(req.query.a);  
    const b = parseInt(req.query.b);
    const ans = calculateSum(a,b);
    res.send(ans.toString());
})

app.listen(3001);