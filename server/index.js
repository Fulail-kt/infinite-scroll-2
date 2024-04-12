import express from 'express'
import route from './routes/route.js'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const app=express()

console.log(process.env.FRONTEND_URL)
app.use(cors({origin:process.env.FRONTEND_URL}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',route)

app.listen(3000,()=>{
    console.log('server is running')
})


