const inicioSesion = require('./inicio-sesion');
const express = require('express');
const router = express.Router();

class InicioSesionController {
  constructor(app) {
    router.post('/', inicioSesion.validarSesion);
    router.post('/web', inicioSesion.validarSesionWeb);
    app.use('/api/v1/inicio-sesion', router);
  }
}

module.exports = InicioSesionController;