const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/omegapetshop", {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    },(err, res) => {
        if(err){
            throw err;
        }else{
            console.log('La conexion a la base de datos fue exitosa....');
        }
});

module.exports = mongoose;