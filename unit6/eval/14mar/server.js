const express = require("express")
const fs = require("fs")
const PORT = 8000
const addresses = require("./addDB.json")
const cors = require("cors");
let app = express()
app.use(cors())
// function logger(req,res,next){
//     console.log(`Requesting from ${__filename}`)
//     next()
//     console.log(`Requested from ${__filename}`)
// }
app.use(express.json())
// app.use(logger)
app.get("/api/addresses",(req,res)=>{
    console.log("get");
    res.json(addresses)
})

app.post("/api/addresses",(req,res)=>{
    console.log("post");
    addresses.push(req.body);
    fs.writeFileSync(`${__dirname}/addDB.json`, JSON.stringify(addresses))
    res.send(req.body)
})
// app.all("/api/addresses",(req,res)=>{
//     console.log(req);
//     res.send("")
// })
app.patch("/api/addresses/:id",(req,res)=>{
    // const {id} = req.params
    // // console.log(Number.parseInt(id));
    // // console.log(req.body);
    // const data = req.body
    // const updated = addresses.map((add)=> { if(add.id === Number.parseInt(id)){
    //     add = data
    //     for( var key in add){
    //         // console.log(data[key]);
    //         add[key] = data.key

    //     }
    // }})

    // console.log(addresses);
    // fs.writeFileSync(`${__dirname}/addDB.json`, JSON.stringify(updated))
    // res.send("Logged")
    res.sendStatus(400)
})
app.delete("/api/addresses/:id",(req,res)=>{
    console.log("delete");
    const {id} = req.params
    const updated = addresses.filter((add)=> add.id != id)
    fs.writeFileSync(`${__dirname}/addDB.json`, JSON.stringify(updated))
    res.send(updated)
})

app.listen(PORT,()=>{
    console.log(`Started at ${PORT}`);
})