const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');

function index(req,res){
    Usuario.find().exec((err, result) => {
        if(err){
            res.status(500).send({message: "Error al momento de ejecutar la consulta"});
        }else{
            if(!result){
                res.status(404).send({message: "Registro no se encuentra"});
            }else{
                res.status(200).send({message: "Consulta exitosa", result});
            }
        }
    });
}

function store(req, res){
    let usuario = new Usuario(req.body);
    let palabraSecretaTextoPlano = req.body.password
    usuario.password = bcryptjs.hash(palabraSecretaTextoPlano, 10 );
    usuario.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function show(req, res){
    let usuario_id = req.params.id;
    Usuario.findById(usuario_id).exec((err, result) => {
        if(err){
            res.status(500).send({message: "Error al momento de ejecutar la consulta"});
        }else{
            if(!result){
                res.status(404).send({message: "Registro no se encuentra"});
            }else{
                res.status(200).send({message: "Consulta exitosa", result});
            }
        }
    });
}

function deleteUsuario(req, res){

    let usuario_id =  req.params.id;
    Usuario.findByIdAndRemove(usuario_id).exec((err, usuario) => {
        if(err){
            res.status(500).send({message: "Error al ejecutar la consulta"});
        }else{
            if(!result){
                res.status(404).send({message: "No se encontro el registro"});
            }else{
                res.status(200).send({message: "Registro eleminado" , usuario});
            }
        }
    })
}

function update(req, res){
    let usuario_id = req.params.id;
    Usuario.findByIdAndUpdate({_id: usuario_id}, req.body, {new: true}, 
        (err, usuario) =>{
            if(err){
                res.status(500).send({message: " Error al realizar la consulta"});
            }else{
                res.status(200).send({message: "Actualizacion exitos", usuario})
            }
    });
}


module.exports = { 
    store,
    show,
    index,
    deleteUsuario,
    update
}