var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//definicion de cabeceras
 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-with, Content-Type, Access-Control-Allow-Request-Method, Accept, X-Auth-Token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
 });

 //rutas
app.use(require('./src/routers/routes.js'));
//exportar
 module.exports = app;