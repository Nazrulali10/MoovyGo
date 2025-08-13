const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    moviename:{type:String,required:true},
    screen:{type:String,required:true},
    seats:{type:[String],required:true},
    ticketPrice:{type:Number,required:true},
    date:{type:String,required:true},
    time:{type:String,required:true},
    bookedtime:{type:String,default:Date.now}
})

const Bookings = mongoose.model("Bookings",bookingsSchema)
module.exports = Bookings