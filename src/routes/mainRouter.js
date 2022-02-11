// Acá nos falta express y el router
const express = require ("express")
// Aća nos falta traer el controller
const mainController = require ("../controllers/mainController")
// Acá definimos las rutas
const router = express.Router();
// Acá exportamos el resultado
router.get("/", mainController.index)

module.exports = router