const express = require("express");
const ownerRouter = express.Router();
const ownerController = require("../controllers/owner/ownerController");
const upload = require("../configs/multer");
const authOwner = require("../middlewares/authOwner");
ownerRouter.post(
  "/addmovies",
  upload.fields([
    { name: "movieImages" },
    { name: "castImages"}
  ]),
  ownerController.addMovies
);
ownerRouter.post("/updatemovies", ownerController.updateMovies);
ownerRouter.get("/movieslist", ownerController.moviesList);
ownerRouter.post('/ownerlogin',ownerController.OwnerLogin)
ownerRouter.get('/ownercheckauth',authOwner,ownerController.OwnercheckAuth)
ownerRouter.get('/ownerlogout',ownerController.OwnerLogout)

module.exports = ownerRouter;
