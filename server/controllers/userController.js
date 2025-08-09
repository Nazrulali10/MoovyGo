const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({success:false,message:"user doesn't exists"})
        }
        const check = await bcrypt.compare(password,user.password)
        if(!check){
            return res.json({success:true,message:"invalid credentials"})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.cookie('jwt',token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:process.env.NODE_ENV==='production'?'none':'strict',
            secure:process.env.NODE_ENV==='production'
        })
        return res.json({success:true,user,message:"Login successfull"})
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
}

const Signin = async(req,res)=>{
    try {
        const {name,email,password} = req.body
       
        if(!name || !email || !password){
           return res.json({success:false , message:"missing credentials"})
        }
        const check1 = await User.findOne({email})
        if(check1){
           return res.json({success:false , message:"user already exists"})
        }
        const check2 = await User.findOne({name})
        if(check2){
           return res.json({success:false , message:"name should be unique"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.cookie('jwt',token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:process.env.NODE_ENV==='production'?'none':'strict',
            secure:process.env.NODE_ENV==='production'
        })
        return res.json({success:true,user,message:"signin successfull"})
    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
}

const Logout = async(req,res)=>{
  try {
    res.clearCookie("jwt",{
       httpOnly:true,
        sameSite:process.env.NODE_ENV === "production"?"none":"strict",
        secure:process.env.NODE_ENV === "production",
    })
    return res.json({success:true , message:"logged out successfull"})
  } catch (error) {
     console.log(error.message)
     return res.json({success:false , message:error.message})
  }
}

const checkAuth = async(req,res)=>{
    try {
        const {userId} = req.body
        const user = await User.findById(userId).select("-password")
        if(user){
            res.json({success:true,user})
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false , message:error.message})
    }
}

// ALL THESE CONTROLLERS ARE WORKING IN POSTMAN AND CLIENT

module.exports = {Signin,Login,Logout,checkAuth}