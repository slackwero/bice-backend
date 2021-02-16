const { response } = require('express');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


const getUsuarios = async(req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email');

    res.json({
        ok: true,
        usuarios
    });

}

module.exports = {
    getUsuarios
}