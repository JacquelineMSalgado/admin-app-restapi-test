const app = require('./app');
const server = require('http').Server(app);

server.listen(5000,'localhost', ()=> {
    console.log('Server Started');
});