var mongoose = require('mongoose');

var ArticuloSchema = mongoose.Schema({
    referencia: {type:String, required: true, trim: true},
    nombre: {type:String, required: true, trim: true},
    precio: {type:Number, required: true, trim: true},
    cantidad_inventario: {type:Number, required: true, trim: true},
});

const Articulo = mongoose.model('Articulo', ArticuloSchema);

module.exports = Articulo;