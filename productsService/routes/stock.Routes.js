const express = require('express');
const stockController = require('../controllers/stockController');
const router = express.Router();

router.post('/stocks', stockController.createStock);
router.put('/stocks', stockController.updateStock);
router.get('/stocks', stockController.getStocks);

module.exports = router;