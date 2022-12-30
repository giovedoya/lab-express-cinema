const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET movies page */
/* ROUTE movies */
router.get('/', async function (req, res, next) {
    try {
        const movies = await Movies.find({})
        res.render('movies', { movies });
    } catch (error) {
      next(error)  
    }   
});
/* GET one movies page */
/* ROUTE movies */
router.get('/:movieId', async function (req, res, next){
  const { movieId } = req.params;
  try {
    const movie = await Movies.findById(movieId)
    res.render('movieDetail', movie);
} catch (error) {
  next(error)  
}   
})

module.exports = router;
