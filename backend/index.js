//step-1

//const express = require("express")
import express from "express"
import dotenv from "dotenv"
dotenv.config({
    path :".env"
})
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import cors from "cors"


databaseConnection()


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
origin:'http://localhost:3000',
credentials:true
}
app.use(cors(corsOptions))


//api 
app.use("/api/v1/user",userRoute)


app.listen(process.env.port,()=>{console.log(`serverlistinig ${process.env.port}`)
})
