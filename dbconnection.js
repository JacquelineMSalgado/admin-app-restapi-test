const mssql = require('mssql');

class DBConnection {
  async getConnection() {
    try {
        return await mssql.connect({
            user: 'sqluser',
            password: 'admin',
            server: 'localhost',
            database: 'admin-ecommerce',
            port: 1433,
            options: { 
              trustServerCertificate: true,
            } 
        });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();