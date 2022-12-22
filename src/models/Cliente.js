var mongoose = require('mongoose');

var ClienteSchema = mongoose.Schema({
    nombre: {type:String, required: true, trim: true},
    telefono: {type:Number, required: true, trim: true},
    direccion: {type:String, required: true, trim: true},
    ciudad: {type:String, required: true, trim: true},
    email: {type:String, required: true, unique:true, trim: true},
    passowrd: {type:String, required: true, trim: true, minLength:[6,'Password debe ser minimo de 6 caracteres']},
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;