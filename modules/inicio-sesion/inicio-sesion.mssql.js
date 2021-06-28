const mssqlcon = require('../../dbconnection');

class InicioSesionMSSql { 
  async validarSesion(usuario) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("email", usuario.email)
    .input("contrasenia", usuario.contrasenia)
    .execute("sp_GetSesion");
    var valido = res.rowsAffected[0] == 1 ? true : false;
    return valido;
  }

  async validarSesionWeb(usuario) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("email", usuario.email)
    .input("contrasenia", usuario.contrasenia)
    .execute("sp_GetSesion");
    console.log(res);
    return res.recordset;
  }
}

module.exports = new InicioSesionMSSql();