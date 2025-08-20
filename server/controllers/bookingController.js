const Bookings = require("../models/Bookings")
const Movies = require("../models/Movies")

// const submitBooking = async(req,res)=>{
//     try {
        
//         const bookingData = req.body
//         const updateSeats = Movies.find(bookingData.moviename)
//         const book = await Bookings.create({...bookingData})
//         if(book){
//             res.json({success:true,message:"Ticket booked"})
//             console.log(book)
//         }else{
//             console.log("error in booking submittion")
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// }
  const submitBooking = async (req, res) => {
    try {
        const bookingData = req.body;

        // 1. Find the movie by name
         console.log("Incoming booking data:", bookingData);
        const movie = await Movies.findOne({ name: bookingData.moviename });
         console.log("Movie not found");
        if (!movie) {
            return res.json({ success: false, message: "Movie not found" });
        }
         console.log("Movie found:", movie.name);
        // 2. Update seat availability
        const updatedSeats = movie.seats.map(seat => {
            if (bookingData.seats.includes(seat.number)) {
                if (!seat.isAvailable) {
                    throw new Error(`Seat ${seat.number} is already booked.`);
                }
                return { ...seat, isAvailable: false };
            }
            return seat;
        });

        // 3. Save updated movie document
        movie.seats = updatedSeats;
        await movie.save();

        // 4. Create booking
        const booking = await Bookings.create({ ...bookingData });

        res.json({ success: true, message: "Ticket booked", booking });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};


const getBookings = async(req,res)=>{
    try {
        const bookings = await Bookings.find({})
        if(bookings){
            res.json({success:true , bookings})
        }
        else{
            res.json({success:false , message:"Booking controller error"})
        }
    } catch (error) {
        res.json(error.message)
        console.log(error.message)
    }
}

// ALL THESE CONTROLLERS ARE WORKING IN POSTMAN

module.exports = {getBookings,submitBooking}