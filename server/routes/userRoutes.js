const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')
const authUser = require('../middlewares/authUser')

userRouter.post('/login',userController.Login)
userRouter.post('/signin',userController.Signin)
userRouter.get('/logout',userController.Logout)
userRouter.get('/checkauth',authUser,userController.checkAuth)

module.exports = userRouter