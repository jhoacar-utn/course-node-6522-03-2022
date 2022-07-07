const express = require('express');
const { handleProfile } = require('../../controllers/profile');

const router = express.Router();

router.get("/profile", handleProfile);

/**
    Me fuera gustado que completaras todo el backend realizando
    todas las rutas que se piden en la consigna, es decir,
    habilitar la ruta /avatar aca mismo
 */

module.exports = router;