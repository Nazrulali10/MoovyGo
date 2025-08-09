const Movies = require("../../models/Movies")

const cloudinary = require('cloudinary').v2
const jwt = require('jsonwebtoken')


const addMovies = async(req,res)=>{
    try {
        let movieData = JSON.parse(req.body.movieData)
        const files = req.files
        
        
        const movieImages = files['movieImages']
        const movieImagesUrl = await Promise.all(
            movieImages.map(async(item)=>{
              const result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
              return result.secure_url
            }
            
        ))

        const castImages = files['castImages']
        const castImagesUrl = await Promise.all(
            castImages.map(async(item)=>{
              const result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
              return result.secure_url
            }
            
        ))
        const movie = await Movies.create({...movieData,image:movieImagesUrl,cast:castImagesUrl})
        if(movie){
            res.json({success:true,message:"Movie added successfully"})
        }
        else{
            res.json({success:false,message:"Movie adding failed"})
        }

    } catch (error) {
        console.log(error.message)
    }
}

const updateMovies = async(req,res)=>{
    try {
        const {id} = req.body 
        const findmovietodelete = await Movies.findByIdAndDelete(id)
        if(findmovietodelete){
            res.json({success:true,message:"Movie removed successfully"})
        }
        else{
             res.json({success:false,message:"Movie removing failed"})
        }
        
    } catch (error) {
        console.log(error.message)
    }
}

const moviesList = async(req,res) =>{
    try {
        const movies = await Movies.find({})
        if(movies){
            res.json({success:true , movies})
        }
        else{
            res.json({success:false,message:"error in fetching movies"})
            console.log("error in fetching movies")
        }
    } catch (error) {
        res.json(error.message)
        console.log(error.message)
    }
}

const OwnerLogin = async(req,res)=>{
    try {
        const {email,password} = req.body
        const owner = email.toLowerCase()===process.env.OWNER_EMAIL.toLowerCase()
        const check = password.toLowerCase()===process.env.OWNER_PASSWORD.toLowerCase()

        if(!check || !owner ){
            return res.json({success:true,message:"invalid credentials"})
        }

        const token = jwt.sign({id:email},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.cookie('ownerjwt',token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:process.env.NODE_ENV==='production'?'none':'strict',
            secure:process.env.NODE_ENV==='production'
        })
        return res.json({success:true,owner,message:"Login successfull"})
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
}

const OwnercheckAuth = async(req,res)=>{
    try {
        const {userId} = req.body
        const owner =userId.toLowerCase()===process.env.OWNER_EMAIL.toLowerCase()
        if(owner){
            res.json({success:true,owner})
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false , message:error.message})
    }
}

const OwnerLogout = async(req,res)=>{
    try {
        res.clearCookie("ownerjwt",{
       httpOnly:true,
        sameSite:process.env.NODE_ENV === "production"?"none":"strict",
        secure:process.env.NODE_ENV === "production",
    })
    return res.json({success:true , message:"logged out successfull"})
    } catch (error) {
        console.log(error.message)
        res.json({success:false , message:error.message})
    }
}


module.exports ={addMovies,updateMovies,moviesList,OwnerLogin,OwnercheckAuth,OwnerLogout}