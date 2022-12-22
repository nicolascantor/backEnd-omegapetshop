var mongoose = require('mongoose');

var CompraSchema = mongoose.Schema({
    numero_compra: {type:String, required: true, trim: true},
    fecha: {type:String, required: true, trim: true},
    cantidad: {type: Number, required: true, trim: true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: "Cliente"},
    articulo: {type: mongoose.Schema.Types.ObjectId, ref: "Articulo"},
});

const Compra = mongoose.model('Compra', CompraSchema);

module.exports = Compra;