// generate --> decode --> verify

const jwt = require("jsonwebtoken");

const value = {
    name: "Dhruv",
    account: 123123
}

// jwt generation
const token = jwt.sign(value , "secret");
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGhydXYiLCJhY2NvdW50IjoxMjMxMjMsImlhdCI6MTczNjc5OTkzOX0.xIhTd1KNm9iTF4ozzfjhBXKv756dglL3E18ZQUDUthM

const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGhydXYiLCJhY2NvdW50IjoxMjMxMjMsImlhdCI6MTczNjc5OTkzOX0.xIhTd1KNm9iTF4ozzfjhBXKv756dglL3E18ZQUDUthM" , "secret")
console.log(token);
console.log(verifyToken);

