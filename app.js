const express = require('express');
const app = express();

//Se indica que usará JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//CORS
app.use(async(req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header("Content-Security-Policy", "default-src 'self'");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, EncryptResponse');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Max-Age', 120);
        res.send();
    });
});

async function init() {
  const approuting = require('./modules');
  const appmodules = new approuting(app);
  appmodules.init();
}

init();

module.exports = app;