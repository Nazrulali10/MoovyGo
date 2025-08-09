
const Movies = require("../models/Movies")

const getmovies = async(req,res) =>{
    try {
        const movies = await Movies.find({})
        if(movies){
            res.json({success:true , movies})
            console.log(movies)
        }
        else{
            res.json("error in fetching movies")
            console.log("error in fetching movies")
        }
    } catch (error) {
        res.json(error.message)
        console.log(error.message)
    }
}



module.exports ={getmovies}