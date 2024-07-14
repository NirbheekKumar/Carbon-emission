const express = require('express');
const { calculateEmissions } = require('../controllers/emissionController');

const router = express.Router();

router.post('/calculate', calculateEmissions);

module.exports = router;
