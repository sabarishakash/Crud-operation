const express=require("express")
const app=express()

const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")
const router = require("./Router/Router")
dotenv.config()
mongoose.connect(process.env.db)
.then(()=>{
    console.log("Database is connected");
}).catch(()=>{
    console.log("Database is not connected");
})
app.use(express.json())
app.use(cors())
app.use("/api",router)
app.listen(process.env.PORT,()=>{
    console.log("Server is connected to 2005");
})
