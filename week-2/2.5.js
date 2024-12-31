// creating the http server using express
// node default lib => no


const express = require("express");
const app = express();


function calculateSum(n){
    let ans = 0;
    for(let i = 1; i <=n ; i++){
        ans = ans + i;
    }
    return ans;
}
// let ans = calculateSum(3);
// console.log(ans);

function sum( a , b ){
    const ans = a + b;
    return ans;
}
 
app.get('/', function(req ,res){  // req,re => request , resposne
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("hi your ans is " + ans);  // res.send expects string, buffer or an object, can't pass number directly
})


app.get('/sum', function(req ,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sum(a , b);
    res.send(ans.toString());
})

app.listen(3000);
/* STATUS CODE:
200 --> everything is fine
404 --> route not found, (Doc is not there)
500 --> mid surgury life went away
411 --> input is incorrect, wrong person came for surgury */
 