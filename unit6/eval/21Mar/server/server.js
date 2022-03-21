const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Task = require("./task.schema");
let app = express();
const db_URL = "mongodb+srv://pratham:abc_123@cluster0.nhmts.mongodb.net/tasks?retryWrites=true&w=majority";
const connect = () => {
  return mongoose.connect(db_URL);
};
app.use(express.json());
app.use(cors())
app.get("/task",async(req,res)=>{
    let task = await Task.find({})
    res.status(200).json(task)

})
app.get("/task/:id",async(req,res)=>{
  try{
    console.log(req.params);
    let value = await Task.findById(req.params.id)
    res.status(200).json(value)
  }
  catch(e){
    res.status(400).send(`Something Went Wrong Or Task not Found \n${e.message}`)

  }
})
app.post("/task",async(req,res)=>{
  try{
    const createdTask = await Task.create(req.body);
    res.status(200).json(createdTask)
  }
  catch(e){
    res.status(400).send(e.message)
  }
})
app.delete("/task/:id",async(req,res)=>{
      const updatedUser = await Task.findByIdAndDelete(req.params.id,{
        new:true
      })
      res.status(200).json(updatedUser)
})
app.listen(8000, async () => {
  try {
    await connect();
    console.log("Started at 8000");
  } catch (e) {
    console.log(e.message);
  }
});
