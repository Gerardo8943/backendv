// usuarioRoutes.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController'); 
// Define las rutas
router.post('/usuarios', usuarioController.crearUsuario); 
router.put('/usuarios/:cedula', usuarioController.actualizarUsuario); 
module.exports = router;