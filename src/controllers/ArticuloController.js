const Articulo = require("../models/Articulo");
const bcryptjs = require('bcryptjs');

function index(req,res){
    Articulo.find().exec((err, result) => {
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
    let articulo = new Articulo(req.body);
    usuario.save((err, result) => {
        res.status(200).send({message:result});
    });
}

function show(req, res){
    let articulo_id = req.params.id;
    Articulo.findById(articulo_id).exec((err, result) => {
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

    let articulo_id =  req.params.id;
    Articulo.findByIdAndRemove(articulo_id).exec((err, Articulo) => {
        if(err){
            res.status(500).send({message: "Error al ejecutar la consulta"});
        }else{
            if(!result){
                res.status(404).send({message: "No se encontro el registro"});
            }else{
                res.status(200).send({message: "Registro eleminado" , Articulo});
            }
        }
    })
}

function update(req, res){
    let articulo_id = req.params.id;
    Articulo.findByIdAndUpdate({_id: articulo_id}, req.body, {new: true}, 
        (err, Articulo) =>{
            if(err){
                res.status(500).send({message: " Error al realizar la consulta"});
            }else{
                res.status(200).send({message: "Actualizacion exitos", Articulo})
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