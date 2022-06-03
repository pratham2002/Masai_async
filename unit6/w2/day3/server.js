const express = require("express"),fs=require("fs")
const mongoose = require("mongoose")
const PORT = 8000
const users = require("./users.json")

let app = express();
//get
function logger(req,res,next){
    console.log(`Requesting from ${__filename}`)
    next()
    console.log(`Requested from ${__filename}`)
}
app.use(express.json())
// app.use(logger)

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.get("/users",(req,res)=>{
    res.send(users)
})
app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === Number(id))
    // console.log(id,user);
    res.send(user)
})

app.post("/users",(req,rep)=>{
    console.log("Posting",req.body)
    users.push(req.body)
    console.log(__dirname + "/users.json")
    // var updated = [...users,req.body]
    fs.writeFileSync("users.json",JSON.stringify(users))
    rep.json(req.body)
})

app.listen(PORT,()=>{
    console.log(`Listening At ${PORT}`);
})