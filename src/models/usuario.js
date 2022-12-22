var mongoose = require('mongoose');

var UsuarioSchema = mongoose.Schema({
    nombre: {type:String, required: true, trim: true},
    email: {type:String, required: true, unique:true, trim: true},
    password: {type:String, required: true, trim: true, minLength:[6,'Password debe ser minimo de 6 caracteres']},
});

const Usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = Usuario;