var app = require('./app');
var mongoose = require('./src/database/conexion');

var port = 4000;
app.listen(port, () => {
    console.log('Servidor corriendo... OK');
});