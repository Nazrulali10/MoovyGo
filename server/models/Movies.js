const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    name:{type:String , required:true},
    time:{
        year:{type:String,required:true},
        date:{type:String,required:true},
        showTime:{type:[String],required:true}
    },
    ticketPrice:{type:Number,required:true},
    genre:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:[String],required:true},
    cast:{type:[String],required:true},
    castnames:{type:[String],required:true},
    screen:{type:String,required:true},
    seats:[{
        number:{type:String,required:true},
        isAvailable:{type:Boolean,required:true,default:true}
    }]
},{timestamps:true})
const Movies = mongoose.model("Movies",moviesSchema)
module.exports = Movies