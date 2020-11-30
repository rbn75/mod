const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    username: String,
    password: String,
    email: String,
    datos:{
        type: String,
        default: "Prueba"
    }
});

module.exports = mongoose.model('usuario',UsuarioSchema);