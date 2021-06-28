const productMssql = require('./product.mssql');

class product {
   async getAllProducts(req, res) {
      try {
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getVentasGenerales(req, res) {
      try {
         const output = await productMssql.getVentasGenerales();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getVentasPorProducto(req, res) {
      try {
         const output = await productMssql.getVentasPorProducto();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getVentasPorMes(req, res) {
      try {
         const output = await productMssql.getVentasPorMes();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getVentasPorProductoMes(req, res) {
      try {
         const output = await productMssql.getVentasPorProductoMes();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getTopNumeroVentas(req, res) {
      try {
         const output = await productMssql.getTopNumeroVentas();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getTopVentas(req, res) {
      try {
         const output = await productMssql.getTopVentas();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }

   async getStock(req, res) {
      try {
         const output = await productMssql.getStock();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }
}

module.exports = new product();