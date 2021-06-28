const InicioSesionMssql = require('./inicio-sesion.mssql');

class InicioSesion {
   async validarSesion(req, res) {
      try {
         const output = await InicioSesionMssql.validarSesion(req.body);
         res.send(output);
         // return res.status(200).json({
         //    status: true,
         //    usuario: output,
         //    sesionValida: output.length
         // });
      }
      catch (error) {
       console.log(error);
      }
   }

   async validarSesionWeb(req, res) {
      try {
         const output = await InicioSesionMssql.validarSesionWeb(req.body);
         return res.status(200).json({
            status: true,
            usuario: output,
            sesionValida: output.length
         });
      }
      catch (error) {
       console.log(error);
      }
   }
}

module.exports = new InicioSesion();