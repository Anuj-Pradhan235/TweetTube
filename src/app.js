import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//data taken from form
app.use(express.json({
    limit:"16kb"
}))
//data taken from url
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app};