const express = require('express')
const movieRouter = express.Router()
const movieController = require('../controllers/movieController')

movieRouter.get('/getmovies',movieController.getmovies)

module.exports = movieRouter