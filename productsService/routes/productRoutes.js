const Router=require('express')
const productController = require('../controllers/productController');
const router =  new Router();

router.post('/products', productController.createProduct);

module.exports = router;