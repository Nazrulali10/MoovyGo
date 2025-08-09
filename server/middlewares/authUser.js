const jwt = require('jsonwebtoken')

const authUser = async(req,res,next) =>{
    try {
        const token = req.cookies.jwt
        if(!token){
            res.json({success:false , message:"token unavilable User unauthorized"})
        }
        const verifiedtoken = jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!verifiedtoken){
            res.json({success:false , message:"invalid token User unauthorized"})
        }
        if(!req.body) req.body = {}
         req.body.userId =  verifiedtoken.id 
        next()
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = authUser