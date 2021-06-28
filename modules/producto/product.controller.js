const product = require('./product');
const express = require('express');
const router = express.Router();

class ProductController {
  constructor(app) {
    router.get('/', product.getAllProducts);
    router.get('/ventas-generales', product.getVentasGenerales);
    router.get('/ventas-por-producto', product.getVentasPorProducto);
    router.get('/ventas-por-mes', product.getVentasPorMes);
    router.get('/ventas-por-producto-mes', product.getVentasPorProductoMes);
    router.get('/top-numero-ventas', product.getTopNumeroVentas);
    router.get('/top-ventas', product.getTopVentas);
    router.get('/stock', product.getStock);
    app.use('/api/v1/products', router);
  }
}

module.exports = ProductController;