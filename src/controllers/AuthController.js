const Usuario = require("../models/usuario");
const bcrypt = require('bcrypt');

function login(req, res){
    //let id = req.params.id; 
    let usuario = Usuario.findById( req.body.id);
    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    //revisar la password
    const passCorrecto = bcryptjs.compare(req.body.password, usuario.password); 
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    //Si todo es correcto, crear y firmar el token

    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 43200, //1 hora
      },
      (error, token) => {
        if (error) throw error;

        //Mensaje de confirmación
        res.json({ token });
      }
    );
}