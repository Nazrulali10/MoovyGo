const express = require('express')
const App = express()
const cors = require('cors')
const connectDB = require('./configs/mongoose')
const dotenv = require('dotenv')
const connectCloudinary = require('./configs/cloudinary')
const bookingRouter = require('./routes/bookingRoutes')
const movieRouter = require('./routes/movieRoutes')
const ownerRouter = require('./routes/ownerRoutes')
const userRouter = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')

dotenv.config()

const allowedOrigins = ["http://localhost:5173"]

App.use(cors({
    origin:allowedOrigins,
    credentials:true
}))
App.use(express.urlencoded({ extended: true }));
App.use(express.json())
App.use(cookieParser())


const PORT = process.env.PORT || 5000

App.use('/api/booking',bookingRouter)
App.use('/api/movie',movieRouter)
App.use('/api/owner',ownerRouter)
App.use('/api/user',userRouter)


App.get('/',(req,res)=>{
    res.send("Working")
})

const connections = async()=>{
await connectDB()
await connectCloudinary()
}

App.listen(PORT,()=>{
    connections()
    console.log(`server is running on ${PORT}`)
})