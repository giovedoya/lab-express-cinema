const express = require('express');
const router = express.Router();

/* GET movies page */
/* ROUTE movies */
router.get('/', (req, res, next) => res.render('movies'));

module.exports = router;
