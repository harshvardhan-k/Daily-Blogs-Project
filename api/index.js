import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import "./db/database.js"
import UserRouter from "./routes/user.js"
import BlogRouter from "./routes/blog.js"
import path from 'path'

dotenv.config()

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors({credentials: true}))

// using routes
app.use("/api/user", UserRouter)
app.use("/api/blog", BlogRouter)

const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,'/client/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'))
})

app.listen(port, ()=>{
    // console.log("App is running on port: ",port);
})