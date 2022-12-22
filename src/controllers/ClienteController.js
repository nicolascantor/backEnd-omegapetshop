const Cliente = require("../models/Cliente");
const bcryptjs = require('bcryptjs');

function index(req,res){
    Cliente.find().exec((err, result) => {
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
    let cliente = new Cliente(req.body);
    cliente.password = bcryptjs.hash(palabraSecretaTextoPlano, 10);
    cliente.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function show(req, res){
    let cliente_id = req.params.id;
    Cliente.findById(cliente_id).exec((err, result) => {
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

    let cliente_id =  req.params.id;
    Cliente.findByIdAndRemove(cliente_id).exec((err, result, Cliente) => {
        if(err){
            res.status(500).send({message: "Error al ejecutar la consulta"});
        }else{
            if(!result){
                res.status(404).send({message: "No se encontro el registro"});
            }else{
                res.status(200).send({message: "Registro eleminado" , Cliente});
            }
        }
    })
}

function update(req, res){
    let cliente_id = req.params.id;
    Cliente.findByIdAndUpdate({_id: cliente_id}, req.body, {new: true}, 
        (err, Cliente) =>{
            if(err){
                res.status(500).send({message: " Error al realizar la consulta"});
            }else{
                res.status(200).send({message: "Actualizacion exitos", Cliente})
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