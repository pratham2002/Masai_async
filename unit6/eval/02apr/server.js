const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 8000
const userController = require("./controlers/user.controler")
const authController = require("./controlers/auth.controller")
const booksController = require("./controlers/books.controler")
const DB_URL = "mongodb+srv://pratham:abc_123@cluster0.nhmts.mongodb.net/user?retryWrites=true&w=majority"
const connect = ()=>{
    return mongoose.connect(DB_URL);
}
let app = express();
app.use(express.json())
app.use(cors())
app.use("/user",userController)
app.use("/auth",authController)
app.use("/books",booksController)


app.listen(PORT,async()=>{
    try{
        await connect();
        console.log(`Listening on ${PORT}`);

    }
    catch(e){
        console.log(e.message);
    }
})