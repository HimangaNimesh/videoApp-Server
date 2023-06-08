import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/UserRoute.js"
import videoRouter from "./routes/VideoRoute.js"
import commentRouter from "./routes/CommentRoute.js"
import authRouter from "./routes/authRoute.js"

const app = express()
dotenv.config()

const connect = () =>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to Mongo DB")
    })
    .catch((err)=>{
        throw err;
    })
}

app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/videos", videoRouter)
app.use("api/comments", commentRouter)

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

app.listen(8000, ()=>{
    connect()
    console.log("connected!")
})