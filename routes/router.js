const express = require('express');
const router = new express.Router();

const afiliado = require('../controllers/afiliado.js');

router.route('/afiliados/prioridad/uno/V1.0.0/afiliado/:tipoIdentificacion?/:numeroIdentificacion?').get(afiliado.getAfiliadoPrioridadUno);
router.route('/afiliados/prioridad/dos/V1.0.0/afiliado/:tipoIdentificacion?/:numeroIdentificacion?').get(afiliado.getAfiliadoPrioridadDos);

module.exports = router;
