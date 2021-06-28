class Module {
    constructor(app) {
        this.app = app;
    }
    
    init() {
        const productcontroller = require('./producto/product.controller');
        const iniciosesioncontroller = require('./inicio-sesion/inicio-sesion.controller');
        new productcontroller(this.app);
        new iniciosesioncontroller(this.app);
    }
}

module.exports = Module;