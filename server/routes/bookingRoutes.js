const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/bookingController')

bookingRouter.post('/submitbooking',bookingController.submitBooking)
bookingRouter.get('/getbookings',bookingController.getBookings)

module.exports = bookingRouter