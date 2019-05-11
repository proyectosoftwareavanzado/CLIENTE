'use strict'

const express = require('express');

/*************Instancias controladores administrador****************/
const user = require('../controllers/users/user');
/*******************************************************************/

const api = express.Router();

api.get('/obtenerCatalogoTienda',user.obtenerCatalogoTienda);
api.get('/enviarOrden',user.enviarOrden);

module.exports = api;