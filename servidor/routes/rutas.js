const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")


router.get("/peliculas-de-la-semana", controller.getMostWatchedMovies);
router.get("/peliculas-en-cine/:page", controller.getMoviesInTheatres);
router.get("/peliculas-populares/:page", controller.getMostPopularMovies);
router.get("/movie/:id", controller.getMovieDetails);
router.get("/base_url", controller.obtenerBaseUrl);

module.exports = router;