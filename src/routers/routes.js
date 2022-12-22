const { Router } = require('express');
const auth = require("../middleware/auth");

//Variables y constantes
const router = Router();
var usuarioController = require('../controllers/UsuarioController');
var articuloController = require('../controllers/ArticuloController');
var clienteController = require('../controllers/ClienteController');
var authController = require('../controllers/AuthController');


//rutas para el modelo usuario
router.post('/api/user/create', usuarioController.store);
router.get('/api/user/buscar/:id', usuarioController.show);
router.get('/api/users', usuarioController.index);
router.delete('/api/user/delete/:id', usuarioController.deleteUsuario);
router.put('/api/user/update/:id', usuarioController.update);

//rutas para el modelo articulo
router.post('/api/articulo/create', articuloController.store);
router.get('/api/articulo/buscar/:id', articuloController.show);
router.get('/api/articulos', articuloController.index);
router.delete('/api/articulo/delete/:id', articuloController.deleteUsuario);
router.put('/api/articulo/update/:id', articuloController.update);

//rutas para el modelo cliente
router.post('/api/cliente/create', clienteController.store);
router.get('/api/cliente/buscar/:id', clienteController.show);
router.get('/api/clientes', clienteController.index);
router.delete('/api/cliente/delete/:id', clienteController.deleteUsuario);
router.put('/api/cliente/update/:id', clienteController.update);

//rutas para el modelo auth
router.post('/api/auth/create', authController.store);
router.get('/api/auth/buscar/:id', authController.show);
router.get('/api/auth', authController.index);
router.delete('/api/auth/delete/:id', authController.deleteUsuario);
router.put('/api/auth/update/:id', authController.update);


module.exports = router;
//export default router;