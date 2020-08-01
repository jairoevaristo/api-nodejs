const express = require('express');
const router = express.Router();

const ProductsController = require('./controllers/ProductController');

router.get('/products', ProductsController.index);

router.post('/products', ProductsController.store);

router.get('/products/:id', ProductsController.show);

router.put('/products/:id', ProductsController.update);

router.delete('/products/:id', ProductsController.delete);

module.exports = router;