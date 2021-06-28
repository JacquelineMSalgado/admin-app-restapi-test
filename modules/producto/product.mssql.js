const mssqlcon = require('../../dbconnection');

class ProductMSSql { 
  async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_productos');
    return res.recordset;
  }

  async getVentasGenerales() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_ventas_generales');
    return res.recordset;
  }

  async getVentasPorProducto() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_ventas_producto');
    return res.recordset;
  }

  async getVentasPorMes() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_ventas_mes');
    return res.recordset;
  }

  async getVentasPorProductoMes() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_ventas_producto_mes');
    return res.recordset;
  }

  async getTopNumeroVentas() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_top_ventas');
    return res.recordset;
  }

  async getTopVentas() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_top_total_ventas');
    return res.recordset;
  }

  async getStock() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from view_existencia');
    return res.recordset;
  }
}

module.exports = new ProductMSSql();